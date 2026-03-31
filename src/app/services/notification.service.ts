import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  FirestorePortalNotificationsService,
  PortalNotificationRow,
  portalRowCreatedAt,
} from './firestore-portal-notifications.service';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export type NotificationPortalRole = 'admin' | 'staff';

export interface AppNotification {
  id: string;
  type: NotificationType;
  title?: string;
  message: string;
  createdAt: Date;
  read: boolean;
  /**
   * When set, any logged-in user whose Auth role matches sees this item (works without Users collection / IDs).
   */
  visibleToRoles?: NotificationPortalRole[];
  /**
   * When set and non-empty, these login user IDs also see the item (e.g. resident portal user id).
   * Can be combined with visibleToRoles (match if either fits).
   */
  recipientUserIds?: string[];
  /**
   * URL segments after the portal prefix: admin/staff use `['requests', id]`, resident uses the same under /resident/.
   */
  actionRoute?: string[];
  /** Certificate request id for staff/resident deep links (survives older stored items; more reliable than actionRoute alone). */
  linkRequestId?: string;
  /**
   * Barangay resident id on the request (e.g. BRGY-1001) — matches `CertificateRequest.residentId` and
   * the logged-in resident’s `Resident.residentId` even when auth user id ≠ Firestore document id.
   */
  residentScopeBarangayId?: string;
  /** When set, this row is synced from Firestore (`portalNotifications`). */
  firestoreDocId?: string;
  firestoreAudience?: 'resident' | 'staff';
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly firestorePortal = inject(FirestorePortalNotificationsService);

  private readonly STORAGE_KEY = 'brimms_app_notifications_v1';
  /** Tracks request IDs we already rang the bell for (avoids duplicates; backs existing Pending in DB). */
  private readonly STAFF_NOTIFIED_REQUEST_IDS_KEY = 'brimms_staff_notified_request_ids_v1';
  private readonly MAX_STORED = 100;
  private readonly MAX_TRACKED_REQUEST_IDS = 800;

  private readonly _notifications = new BehaviorSubject<AppNotification[]>([]);
  readonly notifications$: Observable<AppNotification[]> = this._notifications.asObservable();

  /** Number of unread notifications */
  get unreadCount(): number {
    return this._notifications.value.filter(n => !n.read).length;
  }

  constructor() {
    this.loadFromStorage();
  }

  /** Full list for the current session (caller filters by user). */
  getNotificationsSnapshot(): AppNotification[] {
    return this._notifications.value;
  }

  /** Normalize barangay / resident ids for comparison (spacing, case). */
  private static normRid(s: string): string {
    return s.trim().toLowerCase();
  }

  /**
   * Whether the given login user should see this notification.
   * @param userRole Auth role: 'admin' | 'staff' | 'resident'
   * @param residentPortalBarangayId `Resident.residentId` for the current user (e.g. BRGY-1001)
   */
  isVisibleToUser(
    n: AppNotification,
    userId: string | null | undefined,
    userRole?: string | null,
    residentPortalBarangayId?: string | null,
  ): boolean {
    if (n.residentScopeBarangayId) {
      if (String(userRole).toLowerCase() !== 'resident') {
        return false;
      }
      const idMatch =
        !!n.recipientUserIds?.length &&
        !!userId &&
        n.recipientUserIds.some(id => id === userId);
      if (idMatch) {
        return true;
      }
      if (!residentPortalBarangayId?.trim()) {
        return false;
      }
      return (
        NotificationService.normRid(n.residentScopeBarangayId) ===
        NotificationService.normRid(residentPortalBarangayId)
      );
    }

    const roles = n.visibleToRoles;
    const ids = n.recipientUserIds;
    const hasTargeting =
      (roles?.length ?? 0) > 0 || (ids?.length ?? 0) > 0;
    if (!hasTargeting) {
      return true;
    }

    const roleMatch =
      !!roles?.length &&
      !!userRole &&
      roles.some(r => r === String(userRole).toLowerCase());

    const idMatch = !!ids?.length && !!userId && ids.includes(userId);

    return roleMatch || idMatch;
  }

  /** All admin/staff portal sessions (Firestore Users list not required). */
  notifyAdminAndStaff(
    input: {
      type: NotificationType;
      message: string;
      title?: string;
      actionRoute?: string[];
      linkRequestId?: string;
    },
  ): void {
    this.add({ ...input, visibleToRoles: ['admin', 'staff'] });
  }

  /** IDs of certificate requests staff were already notified about (localStorage). */
  getStaffNotifiedRequestIds(): Set<string> {
    try {
      const raw = localStorage.getItem(this.STAFF_NOTIFIED_REQUEST_IDS_KEY);
      if (!raw) {
        return new Set();
      }
      const arr = JSON.parse(raw) as string[];
      return new Set(Array.isArray(arr) ? arr.filter(Boolean) : []);
    } catch {
      return new Set();
    }
  }

  /** Call after enqueueing a staff notification for this request so sync does not duplicate. */
  markStaffNotifiedAboutRequest(requestId: string): void {
    if (!requestId) {
      return;
    }
    const next = [...this.getStaffNotifiedRequestIds(), String(requestId)];
    const trimmed = next.slice(-this.MAX_TRACKED_REQUEST_IDS);
    try {
      localStorage.setItem(this.STAFF_NOTIFIED_REQUEST_IDS_KEY, JSON.stringify(trimmed));
    } catch {
      // ignore
    }
  }

  /**
   * Approve/decline (and similar): target the resident portal by barangay id on the request,
   * not by Firestore/login document id (those often differ from demo auth or email login).
   */
  notifyResidentForCertificateDecision(
    input: {
      residentBarangayId: string;
      /** Firestore/login resident document ids — extra match if barangay cache is missing. */
      alsoNotifyUserIds?: string[];
      type: NotificationType;
      message: string;
      title?: string;
      actionRoute?: string[];
      linkRequestId?: string;
    },
  ): void {
    const rid = input.residentBarangayId?.trim();
    if (!rid) {
      return;
    }
    const { residentBarangayId, alsoNotifyUserIds, ...rest } = input;
    const extra = [...new Set((alsoNotifyUserIds ?? []).filter(Boolean))];
    this.add({
      ...rest,
      residentScopeBarangayId: rid,
      ...(extra.length ? { recipientUserIds: extra } : {}),
    });
  }

  /** Replace in-memory Firestore-backed rows (portalNotifications stream). */
  applyFirestorePortalRows(rows: PortalNotificationRow[]): void {
    const remote = rows.map(r => this.mapPortalRow(r));
    const local = this._notifications.value.filter(n => !n.firestoreDocId);
    const merged = [...remote, ...local]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, this.MAX_STORED);
    if (this.sameList(this._notifications.value, merged)) {
      return;
    }
    this._notifications.next(merged);
    this.persist();
  }

  /**
   * Prevent re-emitting an equivalent list, which can otherwise create
   * notification refresh loops in subscribers.
   */
  private sameList(a: AppNotification[], b: AppNotification[]): boolean {
    if (a === b) {
      return true;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      const x = a[i];
      const y = b[i];
      if (
        x.id !== y.id ||
        x.firestoreDocId !== y.firestoreDocId ||
        x.read !== y.read ||
        x.type !== y.type ||
        x.title !== y.title ||
        x.message !== y.message ||
        x.linkRequestId !== y.linkRequestId ||
        x.residentScopeBarangayId !== y.residentScopeBarangayId ||
        x.createdAt.getTime() !== y.createdAt.getTime() ||
        !this.sameStringArray(x.actionRoute, y.actionRoute) ||
        !this.sameStringArray(x.visibleToRoles, y.visibleToRoles) ||
        !this.sameStringArray(x.recipientUserIds, y.recipientUserIds)
      ) {
        return false;
      }
    }
    return true;
  }

  private sameStringArray(
    a: readonly string[] | undefined,
    b: readonly string[] | undefined,
  ): boolean {
    if (!a?.length && !b?.length) {
      return true;
    }
    if (!a || !b || a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  private mapPortalRow(r: PortalNotificationRow): AppNotification {
    return {
      id: `fs:${r.id}`,
      firestoreDocId: r.id,
      firestoreAudience: r.audience,
      type: r.type,
      title: r.title ?? undefined,
      message: r.message,
      read: !!r.read,
      createdAt: portalRowCreatedAt(r),
      linkRequestId: r.linkRequestId ?? undefined,
      actionRoute: r.linkRequestId ? ['requests', String(r.linkRequestId)] : undefined,
      ...(r.audience === 'resident' && r.recipientBarangayKey
        ? { residentScopeBarangayId: r.recipientBarangayKey }
        : {}),
      ...(r.audience === 'staff' ? { visibleToRoles: ['admin', 'staff'] as const } : {}),
    };
  }

  /** Notify specific accounts by login user id (e.g. one resident). */
  notifyUsers(
    userIds: string[],
    input: {
      type: NotificationType;
      message: string;
      title?: string;
      actionRoute?: string[];
      linkRequestId?: string;
    },
  ): void {
    const ids = [...new Set(userIds.filter(Boolean))];
    if (!ids.length) {
      return;
    }
    this.add({ ...input, recipientUserIds: ids });
  }

  /** Convenience methods for different notification types */
  info(message: string, title?: string) {
    this.add({ type: 'info', message, title });
  }

  success(message: string, title?: string) {
    this.add({ type: 'success', message, title });
  }

  warning(message: string, title?: string) {
    this.add({ type: 'warning', message, title });
  }

  error(message: string, title?: string) {
    this.add({ type: 'error', message, title });
  }

  /** Mark a notification as read */
  markAsRead(id: string) {
    const current = this._notifications.value;
    const target = current.find(n => n.id === id);
    if (target?.firestoreDocId) {
      this.firestorePortal.markRead(target.firestoreDocId).subscribe({ error: () => {} });
    }
    const updated = current.map(n => (n.id === id ? { ...n, read: true } : n));
    this._notifications.next(updated);
    this.persist();
  }

  /** Mark all notifications as read */
  markAllAsRead() {
    const current = this._notifications.value;
    for (const n of current) {
      if (!n.read && n.firestoreDocId) {
        this.firestorePortal.markRead(n.firestoreDocId).subscribe({ error: () => {} });
      }
    }
    const updated = current.map(n => ({ ...n, read: true }));
    this._notifications.next(updated);
    this.persist();
  }

  /** Clear all notifications */
  clear() {
    this._notifications.next([]);
    this.persist();
  }

  /** Internal helper to add a notification */
  private add(
    input: {
      type: NotificationType;
      message: string;
      title?: string;
      recipientUserIds?: string[];
      visibleToRoles?: NotificationPortalRole[];
      actionRoute?: string[];
      linkRequestId?: string;
      residentScopeBarangayId?: string;
    },
  ) {
    const current = this._notifications.value;

    const recKey = (input.recipientUserIds ?? []).slice().sort().join(',');
    const rolesKey = (input.visibleToRoles ?? []).slice().sort().join(',');
    const routeKey = (input.actionRoute ?? []).join('/');
    const linkKey = input.linkRequestId ?? '';
    const scopeKey = input.residentScopeBarangayId ?? '';
    const last = current[0];
    const lastRecKey = (last?.recipientUserIds ?? []).slice().sort().join(',');
    const lastRolesKey = (last?.visibleToRoles ?? []).slice().sort().join(',');
    const lastRouteKey = (last?.actionRoute ?? []).join('/');
    const lastLinkKey = last?.linkRequestId ?? '';
    const lastScopeKey = last?.residentScopeBarangayId ?? '';
    if (
      last &&
      last.type === input.type &&
      last.message === input.message &&
      last.title === input.title &&
      recKey === lastRecKey &&
      rolesKey === lastRolesKey &&
      routeKey === lastRouteKey &&
      linkKey === lastLinkKey &&
      scopeKey === lastScopeKey
    ) {
      return;
    }

    const notification: AppNotification = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      type: input.type,
      title: input.title,
      message: input.message,
      createdAt: new Date(),
      read: false,
      visibleToRoles: input.visibleToRoles,
      recipientUserIds: input.recipientUserIds,
      actionRoute: input.actionRoute,
      linkRequestId: input.linkRequestId,
      residentScopeBarangayId: input.residentScopeBarangayId,
    };
    this._notifications.next([notification, ...current].slice(0, this.MAX_STORED));
    this.persist();
  }

  private loadFromStorage(): void {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) {
        return;
      }
      const parsed = JSON.parse(raw) as Array<
        Omit<AppNotification, 'createdAt'> & { createdAt: string }
      >;
      const list: AppNotification[] = parsed.map(row => ({
        ...row,
        createdAt: new Date(row.createdAt),
      }));
      this._notifications.next(list.slice(0, this.MAX_STORED));
    } catch {
      // ignore corrupt storage
    }
  }

  private persist(): void {
    try {
      const list = this._notifications.value
        .filter(n => !n.firestoreDocId)
        .slice(0, this.MAX_STORED)
        .map(n => ({
          ...n,
          createdAt:
            n.createdAt instanceof Date ? n.createdAt.toISOString() : String(n.createdAt),
        }));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    } catch {
      // quota / private mode
    }
  }
}


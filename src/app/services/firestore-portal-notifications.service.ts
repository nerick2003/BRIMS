import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  limit,
} from '@angular/fire/firestore';
import { serverTimestamp, Timestamp } from 'firebase/firestore';
import { Observable, from, map } from 'rxjs';

const COLLECTION = 'portalNotifications';
const QUERY_LIMIT = 80;

export type PortalBellType = 'info' | 'success' | 'warning' | 'error';

export interface PortalNotificationRow {
  id: string;
  audience: 'resident' | 'staff';
  recipientBarangayKey?: string;
  type: PortalBellType;
  title?: string | null;
  message: string;
  linkRequestId?: string | null;
  read: boolean;
  createdAt: Timestamp | unknown;
}

export function portalRowCreatedAt(row: PortalNotificationRow): Date {
  const v = row.createdAt;
  if (v && typeof (v as Timestamp).toDate === 'function') {
    return (v as Timestamp).toDate();
  }
  if (typeof v === 'string') {
    return new Date(v);
  }
  return new Date();
}

/**
 * Cross-device bell alerts (approve/decline, new pending request) stored in Firestore.
 * Local-only toasts (e.g. HTTP errors) stay in NotificationService / localStorage.
 */
@Injectable({ providedIn: 'root' })
export class FirestorePortalNotificationsService {
  private firestore = inject(Firestore);

  normalizeBarangayKey(raw: string): string {
    return String(raw ?? '').trim().toLowerCase();
  }

  observeResident(barangayIdRaw: string): Observable<PortalNotificationRow[]> {
    const key = this.normalizeBarangayKey(barangayIdRaw);
    if (!key) {
      return new Observable(sub => {
        sub.next([]);
        sub.complete();
      });
    }
    const ref = collection(this.firestore, COLLECTION);
    const q = query(
      ref,
      where('audience', '==', 'resident'),
      where('recipientBarangayKey', '==', key),
      limit(QUERY_LIMIT),
    );
    return collectionData(q, { idField: 'id' }).pipe(
      map(list =>
        (list as PortalNotificationRow[]).sort(
          (a, b) => portalRowCreatedAt(b).getTime() - portalRowCreatedAt(a).getTime(),
        ),
      ),
    );
  }

  observeStaff(): Observable<PortalNotificationRow[]> {
    const ref = collection(this.firestore, COLLECTION);
    const q = query(ref, where('audience', '==', 'staff'), limit(QUERY_LIMIT));
    return collectionData(q, { idField: 'id' }).pipe(
      map(list =>
        (list as PortalNotificationRow[]).sort(
          (a, b) => portalRowCreatedAt(b).getTime() - portalRowCreatedAt(a).getTime(),
        ),
      ),
    );
  }

  createResidentAlert(input: {
    residentBarangayId: string;
    type: PortalBellType;
    title?: string;
    message: string;
    linkRequestId: string;
  }): Observable<void> {
    const key = this.normalizeBarangayKey(input.residentBarangayId);
    if (!key) {
      return new Observable(sub => {
        sub.next();
        sub.complete();
      });
    }
    return from(
      addDoc(collection(this.firestore, COLLECTION), {
        audience: 'resident',
        recipientBarangayKey: key,
        type: input.type,
        title: input.title ?? null,
        message: input.message,
        linkRequestId: input.linkRequestId,
        read: false,
        createdAt: serverTimestamp(),
      }),
    ).pipe(map(() => void 0));
  }

  createStaffAlert(input: {
    type: PortalBellType;
    title?: string;
    message: string;
    linkRequestId: string;
  }): Observable<void> {
    return from(
      addDoc(collection(this.firestore, COLLECTION), {
        audience: 'staff',
        type: input.type,
        title: input.title ?? null,
        message: input.message,
        linkRequestId: input.linkRequestId,
        read: false,
        createdAt: serverTimestamp(),
      }),
    ).pipe(map(() => void 0));
  }

  markRead(docId: string): Observable<void> {
    const ref = doc(this.firestore, COLLECTION, docId);
    return from(updateDoc(ref, { read: true })).pipe(map(() => void 0));
  }
}

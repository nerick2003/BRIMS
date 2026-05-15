import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from './data.service';
import { AuditLogService } from './audit-log.service';
import { PasswordService } from './password.service';

export type UserRole = 'admin' | 'staff' | 'resident';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

const PROFILE_PICTURE_PREFIX = 'brims_profile_';
/** Barangay display id (e.g. BRGY-1001) for the logged-in resident — used for bell notifications without waiting on full data merge. */
const RESIDENT_BARANGAY_KEY = 'brimms_resident_barangay_id';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly STORAGE_KEY = 'brimms_user';
  private readonly currentProfilePicture$ = new BehaviorSubject<string | null>(null);

  constructor(
    private data: DataService,
    private audit: AuditLogService,
    private passwordService: PasswordService,
  ) {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (raw) {
      try {
        const user = JSON.parse(raw) as User;
        const pic = this.getProfilePictureFromData(user?.id, user?.role) ?? this.getStoredProfilePicture(user?.id);
        if (pic) this.currentProfilePicture$.next(pic);
      } catch {
        // ignore
      }
    }
    this.data.residentsObservable.subscribe(() => {
      this.syncCurrentUserProfilePicture();
      this.ensureResidentBarangayIdCached();
    });
    this.data.usersObservable.subscribe(() => this.syncCurrentUserProfilePicture());
  }

  /**
   * Barangay id for notification routing (matches CertificateRequest.residentId).
   * Prefer value saved at login; else resolve from loaded residents.
   */
  getResidentBarangayIdForNotifications(): string | null {
    const u = this.currentUser;
    if (!u || u.role !== 'resident') {
      return null;
    }
    const stored = this.getStoredResidentBarangayId();
    if (stored) {
      return stored;
    }
    const resolved = this.resolveResidentBarangayFromData(u);
    if (resolved) {
      this.setStoredResidentBarangayId(resolved);
      return resolved;
    }
    return null;
  }

  private getStoredResidentBarangayId(): string | null {
    try {
      const v = localStorage.getItem(RESIDENT_BARANGAY_KEY);
      return v?.trim() ? v.trim() : null;
    } catch {
      return null;
    }
  }

  private setStoredResidentBarangayId(rid: string | undefined | null): void {
    try {
      if (!rid?.trim()) {
        localStorage.removeItem(RESIDENT_BARANGAY_KEY);
      } else {
        localStorage.setItem(RESIDENT_BARANGAY_KEY, rid.trim());
      }
    } catch {
      // ignore
    }
  }

  private resolveResidentBarangayFromData(user: User): string | undefined {
    const byId = this.data.getResidentById(user.id);
    if (byId?.residentId?.trim()) {
      return byId.residentId.trim();
    }
    const byEmail = this.data.residents.find(
      r => r.email?.trim().toLowerCase() === user.email?.trim().toLowerCase(),
    );
    if (byEmail?.residentId?.trim()) {
      return byEmail.residentId.trim();
    }
    return undefined;
  }

  /** When Firestore finishes loading, attach barangay id if the user logged in before residents arrived. */
  private ensureResidentBarangayIdCached(): void {
    const u = this.currentUser;
    if (!u || u.role !== 'resident') {
      return;
    }
    if (this.getStoredResidentBarangayId()) {
      return;
    }
    const rid = this.resolveResidentBarangayFromData(u);
    if (rid) {
      this.setStoredResidentBarangayId(rid);
    }
  }

  private syncCurrentUserProfilePicture(): void {
    const u = this.currentUser;
    if (!u) return;
    const pic = this.getProfilePictureFromData(u.id, u.role) ?? this.getStoredProfilePicture(u.id);
    this.currentProfilePicture$.next(pic);
  }

  private getProfilePictureFromData(userId: string | undefined, role?: UserRole): string | null {
    if (!userId) return null;
    if (role === 'resident') {
      const r = this.data.getResidentById(userId);
      return r?.profilePicture ?? null;
    }
    if (role === 'staff' || role === 'admin') {
      const us = this.data.users.find(u => u.id === userId);
      return us?.profilePicture ?? null;
    }
    const r = this.data.getResidentById(userId);
    if (r?.profilePicture) return r.profilePicture;
    const us = this.data.users.find(u => u.id === userId);
    return us?.profilePicture ?? null;
  }

  async login(email: string, password: string): Promise<{ success: boolean; role?: UserRole }> {
    const normalizedEmail = email?.trim().toLowerCase() ?? '';
    const pwd = password ?? '';

    const resident = this.data.residents.find(
      (r) => r.email?.trim().toLowerCase() === normalizedEmail,
    );
    if (resident?.password && (await this.passwordService.verify(pwd, resident.password))) {
      await this.upgradeStoredPasswordIfLegacy('resident', resident.id, pwd, resident.password);
      const user: User = {
        id: resident.id,
        name: resident.name,
        email: resident.email ?? normalizedEmail,
        role: 'resident',
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
      this.setStoredResidentBarangayId(resident.residentId);
      this.currentProfilePicture$.next(resident.profilePicture ?? this.getStoredProfilePicture(user.id));
      this.audit.log({
        action: 'Login',
        category: 'auth',
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        details: 'Resident logged in',
      });
      return { success: true, role: 'resident' };
    }

    const staffOrAdmin = this.data.users.find(
      (u) =>
        u.email?.trim().toLowerCase() === normalizedEmail &&
        (u.role === 'Staff' || u.role === 'Admin') &&
        u.status === 'Active',
    );
    if (
      staffOrAdmin?.password &&
      (await this.passwordService.verify(pwd, staffOrAdmin.password))
    ) {
      await this.upgradeStoredPasswordIfLegacy('staff', staffOrAdmin.id, pwd, staffOrAdmin.password);
      const role: UserRole = staffOrAdmin.role === 'Admin' ? 'admin' : 'staff';
      const user: User = {
        id: staffOrAdmin.id,
        name: staffOrAdmin.name,
        email: staffOrAdmin.email,
        role,
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
      this.setStoredResidentBarangayId(null);
      this.currentProfilePicture$.next(staffOrAdmin.profilePicture ?? this.getStoredProfilePicture(user.id));
      this.audit.log({
        action: 'Login',
        category: 'auth',
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        details: `${staffOrAdmin.role} logged in`,
      });
      return { success: true, role };
    }

    return { success: false };
  }

  /**
   * Re-hash legacy plaintext passwords in Firestore after a successful login.
   */
  private async upgradeStoredPasswordIfLegacy(
    accountType: 'resident' | 'staff',
    id: string,
    plainPassword: string,
    storedPassword: string,
  ): Promise<void> {
    if (this.passwordService.isHashed(storedPassword)) {
      return;
    }
    const hashed = await this.passwordService.hash(plainPassword);
    if (accountType === 'resident') {
      this.data.updateResident(id, { password: hashed });
    } else {
      this.data.updateUser(id, { password: hashed });
    }
  }

  /** Change password for the currently logged-in user. */
  async changePassword(
    currentPassword: string,
    newPassword: string,
  ): Promise<{ success: boolean; message?: string }> {
    const user = this.currentUser;
    if (!user) {
      return { success: false, message: 'You are not signed in.' };
    }

    if (newPassword.length < 8) {
      return { success: false, message: 'Password must be at least 8 characters long.' };
    }

    if (user.role === 'resident') {
      const resident = this.data.residents.find((r) => r.id === user.id);
      if (!resident?.password) {
        return { success: false, message: 'Account password not found.' };
      }
      if (!(await this.passwordService.verify(currentPassword, resident.password))) {
        return { success: false, message: 'Current password is incorrect.' };
      }
      const hashed = await this.passwordService.hash(newPassword);
      this.data.updateResident(user.id, { password: hashed });
      return { success: true };
    }

    const systemUser = this.data.users.find((u) => u.id === user.id);
    if (!systemUser?.password) {
      return { success: false, message: 'Account password not found.' };
    }
    if (!(await this.passwordService.verify(currentPassword, systemUser.password))) {
      return { success: false, message: 'Current password is incorrect.' };
    }
    const hashed = await this.passwordService.hash(newPassword);
    this.data.updateUser(user.id, { password: hashed });
    return { success: true };
  }

  logout(): void {
    const user = this.currentUser;
    if (user) {
      this.audit.log({
        action: 'Logout',
        category: 'auth',
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        details: 'User logged out',
      });
    }
    localStorage.removeItem(this.STORAGE_KEY);
    this.setStoredResidentBarangayId(null);
    // Also clear any legacy sessionStorage value if present
    try {
      sessionStorage.removeItem(this.STORAGE_KEY);
    } catch {
      // ignore
    }
    this.currentProfilePicture$.next(null);
  }

  get currentUser(): User | null {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      // If stored data is corrupted, clear it to avoid runtime errors.
      try {
        localStorage.removeItem(this.STORAGE_KEY);
      } catch {
        // ignore
      }
      return null;
    }
  }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  /** Profile picture for the current user (reactive). */
  get profilePicture$(): Observable<string | null> {
    return this.currentProfilePicture$.asObservable();
  }

  get profilePictureUrl(): string | null {
    const u = this.currentUser;
    if (!u) return null;
    let v = this.currentProfilePicture$.value;
    if (v === null) {
      v = this.getProfilePictureFromData(u.id, u.role) ?? this.getStoredProfilePicture(u.id);
      if (v !== null) this.currentProfilePicture$.next(v);
    }
    return v;
  }

  /** Profile picture for a user – from shared data (visible to all who can see that account), then localStorage. */
  getProfilePicture(userId: string): string | null {
    if (!userId) return null;
    const pic = this.getProfilePictureFromData(userId, undefined);
    if (pic) return pic;
    try {
      return localStorage.getItem(PROFILE_PICTURE_PREFIX + userId);
    } catch {
      return null;
    }
  }

  setProfilePicture(userId: string, dataUrl: string): void {
    if (!userId) return;
    const u = this.currentUser;
    try {
      if (u?.role === 'resident') {
        this.data.updateResident(userId, { profilePicture: dataUrl });
      } else if (u?.role === 'staff' || u?.role === 'admin') {
        this.data.updateUser(userId, { profilePicture: dataUrl });
      } else {
        try {
          localStorage.setItem(PROFILE_PICTURE_PREFIX + userId, dataUrl);
        } catch (e) {
          console.warn('Failed to save profile picture', e);
        }
      }
      if (u?.id === userId) {
        this.currentProfilePicture$.next(dataUrl);
      }
    } catch (e) {
      console.warn('Failed to save profile picture', e);
    }
  }

  clearProfilePicture(userId: string): void {
    if (!userId) return;
    const u = this.currentUser;
    try {
      if (u?.role === 'resident') {
        this.data.updateResident(userId, { profilePicture: undefined });
      } else if (u?.role === 'staff' || u?.role === 'admin') {
        this.data.updateUser(userId, { profilePicture: undefined });
      }
      try {
        localStorage.removeItem(PROFILE_PICTURE_PREFIX + userId);
      } catch {
        // ignore
      }
      if (u?.id === userId) {
        this.currentProfilePicture$.next(null);
      }
    } catch (e) {
      console.warn('Failed to clear profile picture', e);
    }
  }

  private getStoredProfilePicture(userId: string): string | null {
    if (!userId) return null;
    try {
      return localStorage.getItem(PROFILE_PICTURE_PREFIX + userId);
    } catch {
      return null;
    }
  }

  /** Returns success and optional resetLink so the caller can send it via Nodemailer (backend). */
  forgotPassword(email: string): { success: boolean; message?: string; resetLink?: string } {
    const normalizedEmail = email?.trim().toLowerCase() ?? '';

    // Check if email exists in residents (same as login)
    const residentExists = this.data.residents.some(
      (r) => r.email?.trim().toLowerCase() === normalizedEmail
    );
    // Check if email exists in staff/admin users (same as login)
    const staffOrAdminExists = this.data.users.some(
      (u) =>
        u.email?.trim().toLowerCase() === normalizedEmail &&
        (u.role === 'Staff' || u.role === 'Admin') &&
        u.status === 'Active'
    );

    if (!residentExists && !staffOrAdminExists) {
      return { success: false, message: 'Email not found in our system.' };
    }

    const resetToken = this.generateResetToken();

    const resetData = {
      email: normalizedEmail,
      token: resetToken,
      expiresAt: Date.now() + 3600000, // 1 hour from now
    };

    sessionStorage.setItem(`reset_token_${normalizedEmail}`, JSON.stringify(resetData));

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const resetLink = `${origin}/reset-password?token=${resetToken}&email=${encodeURIComponent(normalizedEmail)}`;

    return { success: true, resetLink };
  }

  async resetPassword(
    token: string,
    email: string,
    newPassword: string,
  ): Promise<{ success: boolean; message?: string }> {
    const normalizedEmail = email?.trim().toLowerCase() ?? '';
    const storageKey = `reset_token_${normalizedEmail}`;

    const resetDataStr = sessionStorage.getItem(storageKey);
    if (!resetDataStr) {
      return { success: false, message: 'Invalid or expired reset token.' };
    }

    const resetData = JSON.parse(resetDataStr) as { token: string; expiresAt: number };

    if (resetData.token !== token) {
      return { success: false, message: 'Invalid reset token.' };
    }

    if (Date.now() > resetData.expiresAt) {
      sessionStorage.removeItem(storageKey);
      return { success: false, message: 'Reset token has expired. Please request a new one.' };
    }

    if (newPassword.length < 8) {
      return { success: false, message: 'Password must be at least 8 characters long.' };
    }

    const hashed = await this.passwordService.hash(newPassword);
    const resident = this.data.residents.find(
      (r) => r.email?.trim().toLowerCase() === normalizedEmail,
    );
    if (resident) {
      this.data.updateResident(resident.id, { password: hashed });
      sessionStorage.removeItem(storageKey);
      this.audit.log({
        action: 'Password reset',
        category: 'auth',
        userId: resident.id,
        userName: resident.name,
        userEmail: normalizedEmail,
        details: 'Resident password reset via email link',
      });
      return { success: true };
    }

    const staffOrAdmin = this.data.users.find(
      (u) =>
        u.email?.trim().toLowerCase() === normalizedEmail &&
        (u.role === 'Staff' || u.role === 'Admin') &&
        u.status === 'Active',
    );
    if (staffOrAdmin) {
      this.data.updateUser(staffOrAdmin.id, { password: hashed });
      sessionStorage.removeItem(storageKey);
      this.audit.log({
        action: 'Password reset',
        category: 'auth',
        userId: staffOrAdmin.id,
        userName: staffOrAdmin.name,
        userEmail: normalizedEmail,
        details: `${staffOrAdmin.role} password reset via email link`,
      });
      return { success: true };
    }

    return { success: false, message: 'Account not found.' };
  }

  private generateResetToken(): string {
    // Cryptographically secure token (browser crypto.subtle / getRandomValues)
    const array = new Uint8Array(32);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      crypto.getRandomValues(array);
    } else {
      for (let i = 0; i < array.length; i++) array[i] = Math.floor(Math.random() * 256);
    }
    return Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('');
  }
}

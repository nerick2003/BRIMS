import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;
const BCRYPT_HASH_PATTERN = /^\$2[aby]\$\d{2}\$/;

/**
 * Password hashing and verification (bcrypt).
 * Supports verifying legacy plaintext values and re-hashing on successful login.
 */
@Injectable({ providedIn: 'root' })
export class PasswordService {
  isHashed(value: string | undefined | null): boolean {
    return typeof value === 'string' && BCRYPT_HASH_PATTERN.test(value);
  }

  hashSync(plain: string): string {
    return bcrypt.hashSync(plain, SALT_ROUNDS);
  }

  hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, SALT_ROUNDS);
  }

  /**
   * Verifies a password against stored value (bcrypt hash or legacy plaintext).
   */
  verifySync(plain: string, stored: string | undefined | null): boolean {
    if (!stored) {
      return false;
    }
    if (this.isHashed(stored)) {
      return bcrypt.compareSync(plain, stored);
    }
    return stored === plain;
  }

  verify(plain: string, stored: string | undefined | null): Promise<boolean> {
    if (!stored) {
      return Promise.resolve(false);
    }
    if (this.isHashed(stored)) {
      return bcrypt.compare(plain, stored);
    }
    return Promise.resolve(stored === plain);
  }

  /** Hash plaintext for Firestore; leave existing bcrypt hashes unchanged. */
  hashForStorage(plain: string | undefined): string | undefined {
    if (!plain) {
      return undefined;
    }
    if (this.isHashed(plain)) {
      return plain;
    }
    return this.hashSync(plain);
  }
}

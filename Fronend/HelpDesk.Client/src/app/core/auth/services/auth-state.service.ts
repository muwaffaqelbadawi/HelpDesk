import { computed, Injectable, signal } from '@angular/core';

import { AuthSession } from '../models/auth-session';
import { UserAccountData } from '../../../features/auth/models/user-account-data';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private readonly _session = signal<AuthSession | null>(null);

  readonly session = this._session.asReadonly();

  readonly isAuthenticated = computed(() => this._session() !== null);

  setSession(userAccount: UserAccountData): void {
    this._session.set({
      userAccount,
    });
  }

  clearSession(): void {
    this._session.set(null);
  }
}

import { computed, Injectable, signal } from '@angular/core';

import { AuthSession } from '../models/auth-session';
import { UserAccountData } from '../../../shared/responses/data/user-account-data';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private readonly _session = signal<AuthSession | null>(null);
  private readonly _backendUnavailable = signal(false);

  readonly session = this._session.asReadonly();
  readonly isAuthenticated = computed(() => this._session() !== null);
  readonly backendUnavailable = this._backendUnavailable.asReadonly();

  setSession(userAccountData: UserAccountData): void {
    this._session.set({
      userAccountData,
    });

    this._backendUnavailable.set(false);
  }

  setBackendUnavailable(): void {
    this._backendUnavailable.set(true);
  }

  clearSession(): void {
    this._session.set(null);
  }
}

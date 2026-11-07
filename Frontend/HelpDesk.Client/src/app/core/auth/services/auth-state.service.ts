import { HttpErrorResponse } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { catchError, finalize, map, Observable, of, shareReplay, tap } from 'rxjs';

import { AuthSession } from '../models/auth-session';
import { UserAccountData } from '../../../shared/responses/data/user-account-data';
import type { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private readonly _session = signal<AuthSession | null>(null);
  private readonly _backendUnavailable = signal(false);
  private readonly _hydrated = signal(false);
  private initialization$: Observable<void> | null = null;

  readonly session = this._session.asReadonly();
  readonly isAuthenticated = computed(() => this._session() !== null);
  readonly backendUnavailable = this._backendUnavailable.asReadonly();
  readonly isHydrated = this._hydrated.asReadonly();

  initialize(authService: AuthService): Observable<void> {
    if (this._hydrated()) {
      return of(undefined);
    }

    if (!this.initialization$) {
      this.initialization$ = authService.getCurrentUser().pipe(
        tap((userAccountData) => this.setSession(userAccountData)),
        map(() => undefined),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 0) {
            this.setBackendUnavailable();
          } else {
            this.clearSession();
          }
          return of(undefined);
        }),
        catchError(() => {
          this.clearSession();
          return of(undefined);
        }),
        finalize(() => {
          this._hydrated.set(true);
          this.initialization$ = null;
        }),
        shareReplay({ bufferSize: 1, refCount: false }),
      );
    }

    return this.initialization$;
  }

  setSession(userAccountData: UserAccountData): void {
    this._session.set({
      userAccountData,
    });

    this._backendUnavailable.set(false);
    this._hydrated.set(true);
  }

  setBackendUnavailable(): void {
    this._backendUnavailable.set(true);
  }

  clearSession(): void {
    this._session.set(null);
    this._hydrated.set(true);
  }
}

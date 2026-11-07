import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  provideRouter,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { firstValueFrom, isObservable, of } from 'rxjs';

import { authGuard } from './auth-guard';
import { AuthService } from '../services/auth.service';
import { AuthStateService } from '../services/auth-state.service';

describe('authGuard', () => {
  const executeGuard = () =>
    TestBed.runInInjectionContext(() =>
      authGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );
  let isAuthenticated: jasmine.Spy;
  let isHydrated: jasmine.Spy;
  let initialize: jasmine.Spy;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    isAuthenticated = jasmine.createSpy().and.returnValue(false);
    isHydrated = jasmine.createSpy().and.returnValue(true);
    initialize = jasmine.createSpy().and.returnValue(of(undefined));
    authService = jasmine.createSpyObj<AuthService>('AuthService', ['getCurrentUser']);

    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authService },
        {
          provide: AuthStateService,
          useValue: {
            isAuthenticated,
            isHydrated,
            initialize,
            userAccountData: jasmine.createSpy().and.returnValue(undefined),
          },
        },
      ],
    });
  });

  it('allows authenticated users', () => {
    isAuthenticated.and.returnValue(true);

    expect(executeGuard()).toBe(true);
  });

  it('redirects unauthenticated users to login', () => {
    const result = executeGuard();
    const router = TestBed.inject(Router);

    expect(result instanceof UrlTree).toBe(true);
    if (result instanceof UrlTree) {
      expect(router.serializeUrl(result)).toBe('/auth/login');
    }
  });

  it('hydrates unknown state before deciding whether to allow access', async () => {
    isHydrated.and.returnValue(false);
    isAuthenticated.and.returnValue(true);

    const result = executeGuard();

    expect(initialize).toHaveBeenCalledOnceWith(authService);
    expect(isObservable(result)).toBeTrue();
    if (isObservable(result)) {
      expect(await firstValueFrom(result)).toBeTrue();
    }
  });

  it('should hydrate the authenticated user with the UserAccountData returned by AuthService', async () => {
    const user = {
      userId: 'user-id',
      userName: 'person',
      email: 'person@example.com',
      timeZone: 'Asia/Riyadh',
      preferredLanguage: 'English',
      roles: ['SuperAdmin'],
      mustResetPassword: false,
      rowVersion: null,
      employee: null,
    };

    authService.getCurrentUser.and.returnValue(of(user));
    TestBed.overrideProvider(AuthStateService, {
      useFactory: () => new AuthStateService(),
    });

    const authState = TestBed.inject(AuthStateService);
    const guardResult = TestBed.runInInjectionContext(() =>
      authGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );
    const result = isObservable(guardResult)
      ? await firstValueFrom(guardResult)
      : await guardResult;

    expect(authService.getCurrentUser).toHaveBeenCalledTimes(1);
    expect(authState.session()).toEqual({ userAccountData: user });
    expect(authState.isAuthenticated()).toBeTrue();
    expect(result).toBeTrue();
  });
});

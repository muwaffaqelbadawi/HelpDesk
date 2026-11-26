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
import { AuthStateService } from '../services/auth-state.service';
import { UserService } from '@/core/business/services/user.service';

describe('authGuard', () => {
  const executeGuard = () =>
    TestBed.runInInjectionContext(() =>
      authGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );
  let isAuthenticated: jasmine.Spy;
  let isHydrated: jasmine.Spy;
  let initialize: jasmine.Spy;


  let userService: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    isAuthenticated = jasmine.createSpy().and.returnValue(false);
    isHydrated = jasmine.createSpy().and.returnValue(true);
    initialize = jasmine.createSpy().and.returnValue(of(undefined));


    userService = jasmine.createSpyObj<UserService>('UserService', ['getCurrentUser']);

    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: UserService, useValue: userService },
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

    expect(initialize).toHaveBeenCalledOnceWith(userService);
    expect(isObservable(result)).toBeTrue();
    if (isObservable(result)) {
      expect(await firstValueFrom(result)).toBeTrue();
    }
  });

  it('should hydrate the authenticated user with the UserAccountData returned by UserService', async () => {
    const user = {
      time: '2024-06-01T12:00:00Z',
      message: 'User logged in successfully.',
      data: {
        userAccountData: {
          userId: 'user-id',
          userName: 'person',
          email: 'person@example.com',
          rowVersion: null,
          mustResetPassword: false,
          roles: [],
          employee: null,
        }
      }
    }

    userService
      .getCurrentUser
      .and
      .returnValue(
        of(user),
      );



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

    expect(userService.getCurrentUser).toHaveBeenCalledTimes(1);
    expect(authState.session()).toEqual({
      userAccountData: user.data.userAccountData,
    });
    expect(authState.isAuthenticated()).toBeTrue();
    expect(result).toBeTrue();
  });
});

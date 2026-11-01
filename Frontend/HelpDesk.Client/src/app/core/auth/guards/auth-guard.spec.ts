import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  provideRouter,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { authGuard } from './auth-guard';
import { AuthStateService } from '../services/auth-state.service';

describe('authGuard', () => {
  const executeGuard = () =>
    TestBed.runInInjectionContext(() =>
      authGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );
  let isAuthenticated: jasmine.Spy;

  beforeEach(() => {
    isAuthenticated = jasmine.createSpy().and.returnValue(false);
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        {
          provide: AuthStateService,
          useValue: { isAuthenticated },
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
});

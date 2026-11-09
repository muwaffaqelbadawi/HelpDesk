import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthStateService } from './auth-state.service';
import { RedirectService } from './redirect.service';

describe('RedirectService', () => {
  let authState: AuthStateService;
  let navigate: jasmine.Spy;
  let redirectService: RedirectService;

  beforeEach(() => {
    navigate = jasmine.createSpy().and.returnValue(Promise.resolve(true));
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        { provide: Router, useValue: { navigate } },
      ],
    });

    authState = TestBed.inject(AuthStateService);
    redirectService = TestBed.inject(RedirectService);
  });

  it('routes Admin and SuperAdmin users to the dashboard', () => {
    ['Admin', 'SuperAdmin'].forEach((role) => {
      navigate.calls.reset();
      authState.setSession({
        userId: 'user-id',
        userName: 'user',
        email: 'user@example.com',
        rowVersion: null,
        mustResetPassword: false,
        roles: [role],
        employee: null,
      });

      redirectService.redirect();

      expect(navigate).toHaveBeenCalledOnceWith(['/dashboard']);
    });
  });

  it('routes regular users to home', () => {
    authState.setSession({
      userId: 'user-id',
      userName: 'user',
      email: 'user@example.com',
      rowVersion: null,
      mustResetPassword: false,
      roles: ['Agent', 'Agent'],
      employee: null,
    });

    redirectService.redirect();

    expect(navigate).toHaveBeenCalledOnceWith(['/home']);
  });

  it('prioritizes the password-reset route for users who must reset their password', () => {
    authState.setSession({
      userId: 'user-id',
      userName: 'user',
      email: 'user@example.com',
      rowVersion: null,
      mustResetPassword: true,
      roles: ['Admin', 'SuperAdmin', 'Agent', 'Support'],
      employee: null,
    });

    redirectService.redirect();

    expect(navigate).toHaveBeenCalledOnceWith(['/auth/change-password']);
  });

  it('does not navigate without an authenticated user', () => {
    redirectService.redirect();

    expect(navigate).not.toHaveBeenCalled();
  });
});

import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthStateService } from './auth-state.service';
import { PostLoginRedirectService } from './post-login-redirect.service';

describe('PostLoginRedirectService', () => {
  let authState: AuthStateService;
  let navigate: jasmine.Spy;
  let redirectService: PostLoginRedirectService;

  beforeEach(() => {
    navigate = jasmine.createSpy().and.returnValue(Promise.resolve(true));
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        { provide: Router, useValue: { navigate } },
      ],
    });

    authState = TestBed.inject(AuthStateService);
    redirectService = TestBed.inject(PostLoginRedirectService);
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
      roles: ['User'],
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
      roles: ['Admin', 'SuperAdmin', 'User'],
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

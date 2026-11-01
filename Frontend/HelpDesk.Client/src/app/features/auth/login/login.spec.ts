import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AuthStateService } from '../../../core/auth/services/auth-state.service';
import { AuthService } from '../../../core/auth/services/auth.service';
import { PostLoginRedirectService } from '../../../core/auth/services/post-login-redirect.service';
import { LoginComponent } from './login';

describe('LoginComponent', () => {
  let login: jasmine.Spy;
  let setSession: jasmine.Spy;
  let redirect: jasmine.Spy;
  let component: LoginComponent;

  beforeEach(async () => {
    login = jasmine.createSpy().and.returnValue(
      of({
        userAccountData: {
          userId: 'user-id',
          userName: 'person',
          email: 'person@example.com',
          rowVersion: null,
          mustResetPassword: false,
          roles: ['Admin'],
          employee: null,
        },
      }),
    );
    setSession = jasmine.createSpy();
    redirect = jasmine.createSpy();

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        provideTranslateService(),
        { provide: AuthService, useValue: { login } },
        { provide: AuthStateService, useValue: { setSession } },
        { provide: PostLoginRedirectService, useValue: { redirect } },
      ],
    }).compileComponents();

    component = TestBed.createComponent(LoginComponent).componentInstance;
  });

  it('submits credentials, stores the session, and redirects after login', () => {
    const userAccountData = {
      userId: 'user-id',
      userName: 'person',
      email: 'person@example.com',
      rowVersion: null,
      mustResetPassword: false,
      roles: ['Admin'],
      employee: null,
    };

    component.loginForm.setValue({
      username: 'person@example.com',
      password: 'correct-password',
    });

    component.onSubmit();

    expect(login).toHaveBeenCalledOnceWith({
      username: 'person@example.com',
      password: 'correct-password',
    });
    expect(setSession).toHaveBeenCalledOnceWith(userAccountData);
    expect(redirect).toHaveBeenCalledOnceWith();
  });
});
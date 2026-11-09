import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AuthStateService } from '../../../core/auth/services/auth-state.service';
import { AuthService } from '../../../core/auth/services/auth.service';
import { RedirectService } from '../../../core/auth/services/redirect.service';
import { LoginComponent } from './login';

describe('LoginComponent', () => {
  let login: jasmine.Spy;
  let setSession: jasmine.Spy;
  let redirect: jasmine.Spy;
  let component: LoginComponent;

  beforeEach(async () => {
    login = jasmine.createSpy().and.returnValue(
      of({
        data: {
          userAccountData: {
            userId: 'user-id',
            userName: 'person',
            email: 'person@example.com',
            rowVersion: null,
            mustResetPassword: false,
            roles: ['Admin'],
            employee: null,
          },
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
        { provide: RedirectService, useValue: { redirect } },
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
      staySignedIn: false,
    });

    component.onSubmit();

    expect(login).toHaveBeenCalledOnceWith({
      username: 'person@example.com',
      password: 'correct-password',
      staySignedIn: false,
    });
    expect(setSession).toHaveBeenCalledOnceWith(userAccountData);
    expect(redirect).toHaveBeenCalledOnceWith();
  });

  it('passes the persistent-login selection to the authentication service', () => {
    component.loginForm.setValue({
      username: 'person@example.com',
      password: 'correct-password',
      staySignedIn: true,
    });

    component.onSubmit();

    expect(login).toHaveBeenCalledOnceWith({
      username: 'person@example.com',
      password: 'correct-password',
      staySignedIn: true,
    });
  });
});
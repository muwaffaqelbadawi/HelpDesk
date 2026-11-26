import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserAccountComponent } from './create-user-account';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { AuthStateService } from '@/core/auth/services/auth-state.service';
import { AuthService } from '@/core/auth/services/auth.service';
import { provideTranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { UserService } from '@/core/business/services/user.service';

describe('CreateUserAccountComponent', () => {
  let createUserAccount: jasmine.Spy;
  let setSession: jasmine.Spy;
  let redirect: jasmine.Spy;
  let component: CreateUserAccountComponent;
  let fixture: ComponentFixture<CreateUserAccountComponent>;

  const response = {
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

  beforeEach(async () => {
    createUserAccount = jasmine
      .createSpy()
      .and
      .returnValue(
        of(response),
      );

    setSession = jasmine.createSpy();
    redirect = jasmine.createSpy();

    await TestBed.configureTestingModule({
      imports: [CreateUserAccountComponent],
      providers: [
        { provide: AuthService, useValue: { createUserAccount } },
        { provide: AuthStateService, useValue: { setSession } },
        { provide: RedirectService, useValue: { redirect } },
        {
          provide: UserService,
          useValue: { getCurrentUser: jasmine.createSpy().and.returnValue(of(null)) }
        },
        provideTranslateService(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('renders the external create-user-account template', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('form')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('p-card')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#username')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#email')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#countryId')).not.toBeNull();
  });

  it('applies the external create-user-account stylesheet', () => {
    component.email.markAsTouched();
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '.create-user-account-button',
    ) as HTMLElement;
    const emailError = fixture.nativeElement.querySelector(
      '.create-user-account-error',
    ) as HTMLElement;

    expect(getComputedStyle(button).position).toBe('relative');
    expect(getComputedStyle(button).top).toBe('8px');
    expect(getComputedStyle(emailError).color).toBe('rgb(220, 38, 38)');
  });
});

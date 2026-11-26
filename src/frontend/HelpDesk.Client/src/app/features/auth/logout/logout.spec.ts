import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutComponent } from './logout';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { AuthStateService } from '@/core/auth/services/auth-state.service';
import { AuthService } from '@/core/auth/services/auth.service';
import { of } from 'rxjs';

describe('Logout', () => {
  let logout: jasmine.Spy;
  let clearSession: jasmine.Spy;
  let redirect: jasmine.Spy;
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  const response = {
    time: '2024-06-01T12:00:00Z',
    message: 'User logged out devices successfully.',
    data: {
      logoutAllResponse: {
        revokedRefreshTokensCount: 1,
      }
    }
  }

  beforeEach(async () => {
    logout = jasmine
      .createSpy()
      .and
      .returnValue(
        of(response),
      );

    clearSession = jasmine.createSpy();
    redirect = jasmine.createSpy();

    await TestBed.configureTestingModule({
      imports: [LogoutComponent],
      providers: [
        { provide: AuthService, useValue: { logout } },
        { provide: AuthStateService, useValue: { clearSession } },
        { provide: RedirectService, useValue: { redirect } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

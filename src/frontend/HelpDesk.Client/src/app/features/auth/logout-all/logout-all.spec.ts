import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutAllComponent } from './logout-all';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { AuthStateService } from '@/core/auth/services/auth-state.service';
import { AuthService } from '@/core/auth/services/auth.service';
import { of } from 'rxjs';

describe('LogoutAll', () => {
  let logoutAll: jasmine.Spy;
  let clearSession: jasmine.Spy;
  let redirect: jasmine.Spy;
  let component: LogoutAllComponent;
  let fixture: ComponentFixture<LogoutAllComponent>;

  const response = {
    time: '2024-06-01T12:00:00Z',
    message: 'User logged out from all devices successfully.',
    data: {
      logoutAllResponse: {
        revokedRefreshTokensCount: 3,
      }
    }
  }

  beforeEach(async () => {
    logoutAll = jasmine
      .createSpy()
      .and
      .returnValue(
        of(response),
      );

    clearSession = jasmine.createSpy();
    redirect = jasmine.createSpy();

    await TestBed.configureTestingModule({
      imports: [LogoutAllComponent],
      providers: [
        { provide: AuthService, useValue: { logoutAll } },
        { provide: AuthStateService, useValue: { clearSession } },
        { provide: RedirectService, useValue: { redirect } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoutAllComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

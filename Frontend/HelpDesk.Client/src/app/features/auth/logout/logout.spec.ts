import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutComponent } from './logout';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { AuthStateService } from '@/core/auth/services/auth-state.service';
import { AuthService } from '@/core/auth/services/auth.service';

describe('Logout', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutComponent],
      providers: [
        { provide: AuthService, useValue: {} },
        { provide: AuthStateService, useValue: {} },
        { provide: RedirectService, useValue: {} },
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

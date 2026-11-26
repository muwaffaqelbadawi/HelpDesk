import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordComponent } from './reset-password';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { AuthStateService } from '@/core/auth/services/auth-state.service';
import { AuthService } from '@/core/auth/services/auth.service';
import { provideTranslateService } from '@ngx-translate/core';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordComponent],
      providers: [
        { provide: AuthService, useValue: {} },
        { provide: AuthStateService, useValue: {} },
        { provide: ActivatedRoute, useValue: {} },
        { provide: RedirectService, useValue: {} },
        provideTranslateService(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

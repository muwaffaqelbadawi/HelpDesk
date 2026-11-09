import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { CreateUserAccountComponent } from './create-user-account';

describe('CreateUserAccountComponent', () => {
  let component: CreateUserAccountComponent;
  let fixture: ComponentFixture<CreateUserAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserAccountComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
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

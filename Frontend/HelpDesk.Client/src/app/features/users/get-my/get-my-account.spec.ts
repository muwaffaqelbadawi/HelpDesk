import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyAccountComponent } from './get-my-account';
import { of } from 'rxjs';
import { UserService } from '@/core/business/services/user.service';

describe('GetMyAccountComponent', () => {
  let getMyAccount: jasmine.Spy;
  let component: GetMyAccountComponent;
  let fixture: ComponentFixture<GetMyAccountComponent>;

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
    getMyAccount = jasmine
      .createSpy()
      .and
      .returnValue(
        of(response),
      );

    await TestBed.configureTestingModule({
      imports: [GetMyAccountComponent],
      providers: [
        { provide: UserService, useValue: { getMyAccount } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GetMyAccountComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create GetMyAccount component', () => {
    expect(component).toBeTruthy();
  });


});

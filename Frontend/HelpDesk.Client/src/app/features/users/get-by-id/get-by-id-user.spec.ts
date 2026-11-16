import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdUserComponent } from './get-by-id-user';
import { UserService } from '@/core/business/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideTranslateService } from '@ngx-translate/core';

describe('GetByIdUserComponent', () => {
  let getByIdUser: jasmine.Spy;
  let route: jasmine.Spy;
  let component: GetByIdUserComponent;
  let fixture: ComponentFixture<GetByIdUserComponent>;

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
    getByIdUser = jasmine
      .createSpy()
      .and
      .returnValue(
        of(response),
      );

    route = jasmine.createSpy();

    await TestBed.configureTestingModule({
      imports: [GetByIdUserComponent],
      providers: [
        { provide: UserService, useValue: { getByIdUser } },
        { provide: ActivatedRoute, useValue: { route } },
        provideTranslateService(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GetByIdUserComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

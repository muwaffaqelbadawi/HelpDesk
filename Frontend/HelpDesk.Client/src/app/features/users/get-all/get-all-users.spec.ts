import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllUsersComponent } from './get-all-users';
import { QueryParameters } from '@/core/business/pagination/query-parameters';
import { DEFAULT_QUERY_PARAMETERS } from '@/core/business/pagination/default-query-parameters';
import { of } from 'rxjs';
import { UserService } from '@/core/business/services/user.service';
import { provideTranslateService } from '@ngx-translate/core';

describe('GetAllUsersComponent', () => {
  let getAllUsers: jasmine.Spy;
  let component: GetAllUsersComponent;
  let fixture: ComponentFixture<GetAllUsersComponent>;

  const queryParameters: QueryParameters = {
    ...DEFAULT_QUERY_PARAMETERS,
  };

  const response = {
    message: "Tickets retrieved successfully.",
    time: "2026-10-22T03:21:33.7835632+00:00",
    data: {
      pagedResult: {
        items: [],
        pageNumber: queryParameters.pageNumber,
        pageSize: queryParameters.pageSize,
        totalCount: 0,
        totalPages: 0
      }
    }
  }

  beforeEach(async () => {
    getAllUsers = jasmine
      .createSpy()
      .and
      .returnValue(
        of(response),
      );

    await TestBed.configureTestingModule({
      imports: [GetAllUsersComponent],
      providers: [
        { provide: UserService, useValue: { getAllUsers } },
        provideTranslateService(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAllUsersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create GetAllUsers Component', () => {
    expect(component).toBeTruthy();
  });



});

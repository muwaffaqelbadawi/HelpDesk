import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetAllTicketsComponent } from './get-all-tickets';
import { of } from 'rxjs';
import { TicketService } from '@/core/business/services/ticket.service';
import { provideTranslateService } from '@ngx-translate/core';
import { QueryParameters } from '@/core/business/pagination/query-parameters';
import { DEFAULT_QUERY_PARAMETERS } from '@/core/business/pagination/default-query-parameters';

describe('GetAllTicketsComponent', () => {
  let getAllTickets: jasmine.Spy;
  let component: GetAllTicketsComponent;
  let fixture: ComponentFixture<GetAllTicketsComponent>;

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
    getAllTickets = jasmine
      .createSpy()
      .and
      .returnValue(
        of(response),
      );

    await TestBed.configureTestingModule({
      imports: [GetAllTicketsComponent],
      providers: [
        { provide: TicketService, useValue: { getAllTickets } },
        provideTranslateService(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAllTicketsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create GetAllTickets component', () => {
    expect(component).toBeTruthy();
  });

  it('should create get all tickets', () => {
    component.onGetAll();

    expect(getAllTickets).toHaveBeenCalledOnceWith(
      queryParameters,
    );
  });

  it('should update pagination properties when tickets are retrieved', () => {
    component.onGetAll();

    expect(component.tickets).toEqual([]);
    expect(component.totalRecords).toBe(0);
    expect(component.rows).toBe(10);
    expect(component.first).toBe(0);
    expect(component.loading).toBeFalse();
  });
});


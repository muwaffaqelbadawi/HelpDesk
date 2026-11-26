import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTicketComponent } from './create-ticket';
import { of } from 'rxjs';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { provideTranslateService } from '@ngx-translate/core';
import { TicketService } from '@/core/business/services/ticket.service';

describe('CreateTicketComponent', () => {
  let createTicket: jasmine.Spy;
  let redirect: jasmine.Spy;
  let component: CreateTicketComponent;
  let fixture: ComponentFixture<CreateTicketComponent>;

  const response = {
    time: '2024-06-01T12:00:00Z',
    message: 'Ticket created successfully.',
    data: {
      ticketData: {
        ticketId: 'ticket-id',
        ticketNumber: 123,
        ticketTitle: 'Sample Ticket',
        ticketSubject: 'Sample Subject',
        ticketPriority: 'High',
        ticketStatus: 'Open',
        createdById: 'user-id',
        createdAt: '2024-06-01T12:00:00Z',
        ticketRowVersion: null,
      }
    }
  }

  beforeEach(async () => {
    createTicket = jasmine
      .createSpy()
      .and
      .returnValue(
        of(response),
      );

    redirect = jasmine.createSpy();

    await TestBed.configureTestingModule({
      imports: [CreateTicketComponent],
      providers: [
        { provide: TicketService, useValue: { createTicket } },
        { provide: RedirectService, useValue: { redirect } },
        provideTranslateService(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTicketComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create a ticket', () => {
    expect(component).toBeTruthy();
  });
});

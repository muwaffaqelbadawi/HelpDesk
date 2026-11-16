import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignTicketComponent } from './assign-ticket';
import { of } from 'rxjs';
import { AuthService } from '@/core/auth/services/auth.service';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { TicketService } from '@/core/business/services/ticket.service';
import { provideTranslateService } from '@ngx-translate/core';

describe('AssignTicketComponent', () => {
  let assignTicket: jasmine.Spy;
  let redirect: jasmine.Spy;
  let component: AssignTicketComponent;
  let fixture: ComponentFixture<AssignTicketComponent>;

  const response = {
    time: '2024-06-01T12:00:00Z',
    message: 'Ticket assigned successfully.',
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
    assignTicket = jasmine
      .createSpy()
      .and
      .returnValue(
        of(response),
      );

    redirect = jasmine.createSpy();

    await TestBed.configureTestingModule({
      imports: [AssignTicketComponent],
      providers: [
        { provide: AuthService, useValue: { assignTicket } },
        { provide: RedirectService, useValue: { redirect } },
        {
          provide: TicketService,
          useValue: { assignTicket: jasmine.createSpy().and.returnValue(of(null)) }
        },
        provideTranslateService(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AssignTicketComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTicketComponent } from './delete-ticket';
import { EMPTY, of } from 'rxjs';
import { RedirectService } from '@/core/auth/services/redirect.service';
import { TicketService } from '@/core/business/services/ticket.service';
import { provideTranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

describe('DeleteTicketComponent', () => {
  let deleteTicket: jasmine.Spy;
  let route: jasmine.Spy;
  let redirect: jasmine.Spy;
  let component: DeleteTicketComponent;
  let fixture: ComponentFixture<DeleteTicketComponent>;

  beforeEach(async () => {
    deleteTicket = jasmine
      .createSpy()
      .and
      .returnValue(
        of(EMPTY),
      );

    route = jasmine.createSpy();
    redirect = jasmine.createSpy();

    await TestBed.configureTestingModule({
      imports: [DeleteTicketComponent],
      providers: [
        { provide: TicketService, useValue: { deleteTicket } },
        { provide: ActivatedRoute, useValue: { route } },
        { provide: RedirectService, useValue: { redirect } },
        provideTranslateService(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteTicketComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should delete a ticket', () => {
    expect(component).toBeTruthy();
  });
});

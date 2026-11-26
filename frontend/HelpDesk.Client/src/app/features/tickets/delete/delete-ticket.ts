import { RedirectService } from '@/core/auth/services/redirect.service';
import { TicketService } from '@/core/business/services/ticket.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-ticket',
  imports: [],
  templateUrl: './delete-ticket.html',
  styleUrl: './delete-ticket.css',
})
export class DeleteTicketComponent {
  private readonly ticketService = inject(TicketService);
  private readonly redirectService = inject(RedirectService);
  private readonly route = inject(ActivatedRoute);

  onSubmit(): void {
    const ticketId = this.route.snapshot.queryParamMap.get('ticketId');

    if (!ticketId) {
      throw new Error('Ticket ID is missing.');
    }

    const encodedRowVersion =
      this.route.snapshot.queryParamMap.get('ticketRowVersion');

    if (!encodedRowVersion) {
      throw new Error('Ticket row version is missing.');
    }

    const ticketRowVersion = Uint8Array.from(
      atob(encodedRowVersion),
      (c) => c.charCodeAt(0),
    );

    this.ticketService
      .deleteTicket(
        {
          ticketId,
          ticketRowVersion,
        }
      )
      .subscribe({
        next: () => {
          this.redirectService.redirect();
        },
      });
  }
}
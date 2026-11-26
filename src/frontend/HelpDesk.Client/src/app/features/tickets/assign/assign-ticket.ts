import { RedirectService } from '@/core/auth/services/redirect.service';
import { TicketService } from '@/core/business/services/ticket.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  imports: [],
  templateUrl: './assign-ticket.html',
  styleUrl: './assign-ticket.css',
})
export class AssignTicketComponent {
  private fb = inject(FormBuilder);
  private readonly ticketService = inject(TicketService);
  private readonly redirectService = inject(RedirectService);

  AssignTicketForm = this.fb.nonNullable.group({
    userId: ['', [Validators.required]],
    ticketId: ['', [Validators.required]],
    ticketRowVersion: [null, [Validators.required]],
  });

  onSubmit(): void {
    if (this.AssignTicketForm.invalid) {
      this.AssignTicketForm.markAllAsTouched();
      return;
    }

    this.ticketService
      .AssignTicket(
        this.AssignTicketForm
          .getRawValue())
      .subscribe({
        next: (response) => {
          console.log(response.time);
          console.log(response.message);
          console.log(response.data);

          if (!response.data?.ticketData) {
            this.handleAssignTicketError(
              new Error('Assign ticket response did not contain ticket data.')
            );
            return;
          }

          this.redirectService.redirect();
        },

        error: (error) => this.handleAssignTicketError(error),
      });
  }

  private handleAssignTicketError(error: unknown): void {
    console.error('Assign ticket failed', error);
  }
}

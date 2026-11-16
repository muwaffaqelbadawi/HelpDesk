import { RedirectService } from '@/core/auth/services/redirect.service';
import { TicketService } from '@/core/business/services/ticket.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-create-ticket',
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
  ],
  templateUrl: './create-ticket.html',
  styleUrl: './create-ticket.css',
})
export class CreateTicketComponent {
  private fb = inject(FormBuilder);
  private readonly ticketService = inject(TicketService);
  private readonly redirectService = inject(RedirectService);

  createTicketForm = this.fb.nonNullable.group({
    ticketTitle: ['', [Validators.required]],
    ticketSubject: ['', [Validators.required]],
  });

  onCreate(): void {
    if (this.createTicketForm.invalid) {
      this.createTicketForm.markAllAsTouched();
      return;
    }

    this.ticketService
      .createTicket(
        this.createTicketForm
          .getRawValue())
      .subscribe({
        next: (response) => {
          console.log(response.time);
          console.log(response.message);
          console.log(response.data);

          if (!response.data?.ticketData) {
            this.handleCreateTicketError(
              new Error('Create ticket response did not contain ticket data.')
            );
            return;
          }

          // this.redirectService.redirect();
        },

        error: (error) => this.handleCreateTicketError(error),
      });
  }

  private handleCreateTicketError(error: unknown): void {
    console.error('create ticket failed', error);
  }
}

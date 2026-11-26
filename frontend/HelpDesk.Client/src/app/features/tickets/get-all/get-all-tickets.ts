import { TicketData } from '@/core/business/model/ticket-data';
import { DEFAULT_QUERY_PARAMETERS } from '@/core/business/pagination/default-query-parameters';
import { QueryParameters } from '@/core/business/pagination/query-parameters';
import { TicketService } from '@/core/business/services/ticket.service';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-get-all-tickets',
  imports: [
    Button,
    TableModule,
    TranslatePipe
  ],
  templateUrl: './get-all-tickets.html',
  styleUrl: './get-all-tickets.css',
})
export class GetAllTicketsComponent {
  private readonly ticketService = inject(TicketService);

  tickets: TicketData[] = [];

  totalRecords = 0;
  rows = DEFAULT_QUERY_PARAMETERS.pageSize;
  first = 0;
  loading = false;

  onGetAll(): void {
    const queryParameters: QueryParameters = {
      ...DEFAULT_QUERY_PARAMETERS,
    };

    this.ticketService
      .getAllTickets(
        queryParameters,
      )
      .subscribe({
        next: (response) => {
          console.log(response.time);
          console.log(response.message);
          console.log(response.data);

          const pagedResult = response.data?.pagedResult;

          if (!pagedResult) {
            this.handleGetAllTicketError(
              new Error('Get all tickets response did not contain ticket data.')
            );

            return;
          }

          this.tickets = pagedResult.items;
          this.totalRecords = pagedResult.totalCount;
          this.rows = pagedResult.pageSize;
          this.first = (pagedResult.pageNumber - 1) * pagedResult.pageSize;

          this.loading = false;
        },

        error: (error) => {
          this.loading = false;
          this.handleGetAllTicketError(error);
        },
      });
  }

  private handleGetAllTicketError(error: unknown): void {
    this.loading = false;

    console.error('get all tickets failed:', error);
  }
}

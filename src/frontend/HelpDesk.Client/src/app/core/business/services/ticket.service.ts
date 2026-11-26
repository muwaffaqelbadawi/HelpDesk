import { CreateTicketRequest } from "@/features/tickets/create/create-ticket-request";
import { CreateTicketResponse } from "@/features/tickets/create/create-ticket-response";
import { ApiResponse } from "@/core/business/model/api-response";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { AssignTicketRequest } from "@/features/tickets/assign/assign-ticket.request";
import { DeleteTicketRequest } from "@/features/tickets/delete/delete-ticket-request";
import { QueryParameters } from "../pagination/query-parameters";
import { GetAllTicketsResponse } from "@/features/tickets/get-all/get-all-tickets-response";
import { GetByIdTicketQuery } from "@/features/tickets/get-by-id/get-by-id-ticket.query";
import { GetByIdTicketResponse } from "@/features/tickets/get-by-id/get-by-id-ticket.response";

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private readonly http = inject(HttpClient);

  AssignTicket(request: AssignTicketRequest)
    : Observable<ApiResponse<CreateTicketResponse>> {
    return this.http
      .post<ApiResponse<CreateTicketResponse>>(
        `${environment.apiUrl}/admin/tickets/assign`,
        request,
      );
  }

  getAllTickets(
    queryParameters: QueryParameters,
  )
    : Observable<ApiResponse<GetAllTicketsResponse>> {
    return this.http.get<ApiResponse<GetAllTicketsResponse>>(
      `${environment.apiUrl}/admin/tickets`,
      {
        params: {
          ...queryParameters,
        },
      },
    );
  }

  getByIdTicket(query: GetByIdTicketQuery)
    : Observable<ApiResponse<GetByIdTicketResponse>> {
    return this.http.post<ApiResponse<GetByIdTicketResponse>>(
      `${environment.apiUrl}admin/tickets/${query.ticketId}`,
      query,
    );
  }

  createTicket(request: CreateTicketRequest)
    : Observable<ApiResponse<CreateTicketResponse>> {
    return this.http
      .post<ApiResponse<CreateTicketResponse>>(
        `${environment.apiUrl}/admin/tickets`,
        request,
      );
  }

  deleteTicket(request: DeleteTicketRequest): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiUrl}/admin/tickets`,
      {
        body: {
          ticketRowVersion: request.ticketRowVersion,
        },
      },
    );
  }
}
import { TicketData } from "@/core/business/model/ticket-data";
import { PagedResult } from "@/core/business/pagination/paged-result";

export interface GetAllTicketsResponse {
  pagedResult: PagedResult<TicketData>;
}
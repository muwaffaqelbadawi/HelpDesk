export interface DeleteTicketRequest {
  ticketId: string | null;
  ticketRowVersion: Uint8Array | null;
}
export interface AssignTicketRequest {
  userId: string;
  ticketId: string;
  ticketRowVersion: Uint8Array | null;
}
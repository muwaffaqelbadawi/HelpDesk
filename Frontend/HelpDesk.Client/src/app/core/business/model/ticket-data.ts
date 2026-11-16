export interface TicketData {
  ticketId: string;
  ticketNumber: number;
  ticketTitle: string;
  ticketSubject: string;
  ticketPriority: string;
  ticketStatus: string;
  createdById: string;
  createdByName: string;
  createdAt: string;
  ticketRowVersion: Uint8Array | null;
}
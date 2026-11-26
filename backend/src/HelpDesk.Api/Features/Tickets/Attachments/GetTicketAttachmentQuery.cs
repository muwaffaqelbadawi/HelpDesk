namespace HelpDesk.Features.Tickets.Attachments;

public sealed record GetTicketAttachmentQuery(
    Guid TicketId,
    Guid AttachmentId);

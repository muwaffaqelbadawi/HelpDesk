namespace HelpDesk.Features.Tickets.Attachments;

public sealed record GetTicketAttachmentResponse(
    Stream Content,
    string FileName,
    string ContentType);

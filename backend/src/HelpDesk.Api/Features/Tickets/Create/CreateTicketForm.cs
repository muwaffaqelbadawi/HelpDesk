namespace HelpDesk.Features.Tickets.Create;

public sealed record CreateTicketForm(
    string TicketTitle,
    string TicketSubject,
    string CommentContent,
    ICollection<IFormFile> Attachments);

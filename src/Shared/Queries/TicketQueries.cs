using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Shared.Queries;

public static class TicketQueries
{
    public static IQueryable<TicketData> SelectTicketData(
        this IQueryable<Ticket> query)
    {
        return query.Select(t => new TicketData
        {
            TicketId = t.Id,
            TicketNumber = t.Number,
            TicketTitle = t.Title,
            TicketSubject = t.Subject,
            TicketStatus = t.Status.Name,
            TicketPriority = t.Priority.Name,
            TicketRowVersion = t.RowVersion
        });
    }
}

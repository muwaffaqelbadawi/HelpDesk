using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Projections;

public static class TicketQueries
{
    public static IQueryable<AdminTicketData> SelectAdminTicketData(
    this IQueryable<Ticket> query)
    {
        return query.Select(t => new AdminTicketData
        {
            TicketId = t.Id,
            TicketNumber = t.Number,
            TicketTitle = t.Title,
            TicketSubject = t.Subject,

            TicketStatus = t.Status!.Name ?? string.Empty,
            TicketPriority = t.Priority!.Name ?? string.Empty,

            AssignedById = t.AssignedById,

            AssignedByName = t.AssignedBy!.Employee!.FullEnName ?? string.Empty,

            AssignedToId = t.AssignedToId,

            AssignedToName = t.AssignedTo!.Employee!.FullEnName ?? string.Empty,

            AssignedAt = t.AssignedAt,

            TicketRowVersion = t.RowVersion
        });
    }

    public static IQueryable<TicketData> SelectTicketData(
        this IQueryable<Ticket> query)
    {
        return query.Select(t => new TicketData
        {
            TicketId = t.Id,
            TicketNumber = t.Number,
            TicketTitle = t.Title,
            TicketSubject = t.Subject,
            TicketStatus = t.Status!.Name ?? string.Empty,
            TicketPriority = t.Priority!.Name ?? string.Empty,
            TicketRowVersion = t.RowVersion
        });
    }
}

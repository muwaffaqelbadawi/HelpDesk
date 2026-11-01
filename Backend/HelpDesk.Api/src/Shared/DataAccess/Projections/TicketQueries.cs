using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;
using HelpDesk.src.Shared.DataAccess.Dtos;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Projections;

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

    public static async Task<TicketSummaryData> SelectTicketSummaryData(
        this IQueryable<Ticket> query,
        CancellationToken cancellationToken)
    {
        return await query
            .GroupBy(_ => 1)
            .Select(g => new TicketSummaryData
            {
                TotalTickets = g.Count(),
                OpenTickets = g.Sum(t => t.StatusId == TicketStatusIds.Open ? 1 : 0),
                ClosedTickets = g.Sum(t => t.StatusId == TicketStatusIds.Closed ? 1 : 0),
                AssignedTickets = g.Sum(t => t.StatusId == TicketStatusIds.Assigned ? 1 : 0),
                InProgress = g.Sum(t => t.StatusId == TicketStatusIds.InProgress ? 1 : 0),
                Pending = g.Sum(t => t.StatusId == TicketStatusIds.Pending ? 1 : 0)
            })
            .FirstOrDefaultAsync(cancellationToken)
            ?? new TicketSummaryData();
    }
}

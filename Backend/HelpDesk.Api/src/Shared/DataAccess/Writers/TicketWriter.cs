using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Shared.DataAccess.Writers;

public sealed class TicketWriter(AppDbContext dbContext)
    : ITicketWriter
{
    public async Task WriteAsync(
        Guid userId,
        Guid ticketId,
        TicketHistoryType type,
        DateTimeOffset occurredAt,
        CancellationToken cancellationToken = default)
    {
        var ticketHistory = new TicketHistory
        {
            Id = Guid.NewGuid(),
            TicketId = ticketId,
            Type = type,
            UserId = userId,
            Description = type switch
            {
                TicketHistoryType.Created => "Ticket created",
                TicketHistoryType.Updated => "Ticket updated",
                TicketHistoryType.Assigned => "Ticket assigned",
                TicketHistoryType.Closed => "Ticket closed",
                _ => null
            },
            OldValueId = null,
            NewValueId = null,
            OccurredAt = occurredAt
        };

        dbContext.TicketHistories.Add(ticketHistory);

        await dbContext.SaveChangesAsync(cancellationToken);
    }
}

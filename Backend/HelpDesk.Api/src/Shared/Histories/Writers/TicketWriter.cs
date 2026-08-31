using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Histories.HistoryTypes;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Shared.Histories.Writers;

public sealed class TicketWriter(AppDbContext dbContext) : ITicketWriter
{
    public async Task WriteAsync(
        Guid userId,
        Guid ticketId,
        TicketHistoryTypes type,
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
                TicketHistoryTypes.Created => "Ticket created",
                TicketHistoryTypes.Updated => "Ticket updated",
                TicketHistoryTypes.Assigned => "Ticket assigned",
                TicketHistoryTypes.Closed => "Ticket closed",
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

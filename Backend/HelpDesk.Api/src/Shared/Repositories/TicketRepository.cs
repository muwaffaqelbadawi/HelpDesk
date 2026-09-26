using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.Repositories;

public sealed class TicketRepository(AppDbContext dbContext)
    : ITicketRepository
{
    public async Task AddAsync(
        Ticket ticket,
        CancellationToken cancellationToken)
    {
        dbContext.Tickets.Add(ticket);

        await dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task<int> DeleteAsync(
        Guid userId,
        Guid ticketId,
        byte[] ticketRowVersion,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        return await dbContext.Tickets
            .Where(t => t.Id == ticketId
                 && t.RowVersion == ticketRowVersion
                 && t.CreatedById == userId)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(t => t.DeletedById, userId)
                .SetProperty(t => t.StatusId, TicketStatusIds.Deleted)
                .SetProperty(t => t.DeletedAt, now)
                .SetProperty(t => t.IsDeleted, true),
            cancellationToken);
    }

    public async Task<int> UpdateAsync(
        Guid userId,
        Guid ticketId,
        string ticketTitle,
        string ticketSubject,
        LookupSeed priority,
        LookupSeed status,
        byte[] ticketRowVersion,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        return await dbContext.Tickets
            .Where(t => t.Id == ticketId
                && t.RowVersion == ticketRowVersion
                && t.CreatedById == userId)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(t => t.Title, ticketTitle)
                .SetProperty(t => t.Subject, ticketSubject)
                .SetProperty(t => t.PriorityId, priority.Id)
                .SetProperty(t => t.StatusId, status.Id)
                .SetProperty(t => t.UpdatedById, userId)
                .SetProperty(t => t.UpdatedAt, now),
            cancellationToken);
    }
}

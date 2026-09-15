using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;

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
}

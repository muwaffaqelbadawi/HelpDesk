using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Shared.Repositories;

public sealed class TicketRepository : ITicketRepository
{
    private readonly AppDbContext _dbContext;

    public TicketRepository(
        AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task AddAsync(
        Ticket ticket,
        CancellationToken cancellationToken)
    {
        _dbContext.Tickets.Add(ticket);

        await _dbContext.SaveChangesAsync(cancellationToken);
    }
}

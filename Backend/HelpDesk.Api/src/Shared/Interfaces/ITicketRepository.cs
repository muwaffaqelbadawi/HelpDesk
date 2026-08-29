using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITicketRepository
{
    Task AddAsync(
        Ticket ticket,
        CancellationToken cancellationToken);
}

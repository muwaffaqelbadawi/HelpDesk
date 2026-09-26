using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITicketRepository
{
    Task AddAsync(
        Ticket ticket,
        CancellationToken cancellationToken);

    Task<int> DeleteAsync(
        Guid userId,
        Guid ticketId,
        byte[] ticketRowVersion,
        DateTimeOffset now,
        CancellationToken cancellationToken);

    Task<int> UpdateAsync(
        Guid userId,
        Guid ticketId,
        string ticketTitle,
        string ticketSubject,
        LookupSeed priority,
        LookupSeed status,
        byte[] ticketRowVersion,
        DateTimeOffset now,
        CancellationToken cancellationToken);
}

using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITicketLookupService
{
    LookupSeed GetPriority(Guid id);

    LookupSeed GetStatus(Guid id);

    bool TryGetPriority(Guid id, out LookupSeed priority);

    bool TryGetStatus(Guid id, out LookupSeed status);
}
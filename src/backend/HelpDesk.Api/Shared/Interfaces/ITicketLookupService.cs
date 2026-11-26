using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.Shared.Interfaces;

public interface ITicketLookupService
{
    LookupSeed GetPriority(Guid id);

    LookupSeed GetStatus(Guid id);

    bool TryGetPriority(Guid id, out LookupSeed priority);

    bool TryGetStatus(Guid id, out LookupSeed status);
}
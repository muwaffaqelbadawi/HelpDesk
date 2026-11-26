using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketPriorities;
using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;
using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Lookup;

public sealed class TicketLookupService : ITicketLookupService
{
    private static readonly Dictionary<Guid, LookupSeed> Priorities =
        TicketPrioritiesLookup.Priorities.ToDictionary(p => p.Id);

    private static readonly Dictionary<Guid, LookupSeed> Statuses =
        TicketStatusesLookup.Statuses.ToDictionary(p => p.Id);

    public LookupSeed GetPriority(Guid id)
    {
        return !Priorities.TryGetValue(id, out var priority)
            ? throw new InvalidTicketPriorityException(id)
            : priority;
    }

    public LookupSeed GetStatus(Guid id)
    {
        return !Statuses.TryGetValue(id, out var status)
            ? throw new InvalidTicketStatusException(id)
            : status;
    }

    public bool TryGetPriority(Guid id, out LookupSeed priority)
        => Priorities.TryGetValue(id, out priority!);

    public bool TryGetStatus(Guid id, out LookupSeed status)
        => Statuses.TryGetValue(id, out status!);
}

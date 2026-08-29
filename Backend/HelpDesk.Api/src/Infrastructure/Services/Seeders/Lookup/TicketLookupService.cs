using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Lookup;

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

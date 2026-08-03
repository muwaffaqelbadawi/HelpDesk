using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketStatuses;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Lookup;

public sealed class TicketLookupService : ILookupService
{
    private static readonly IReadOnlyDictionary<Guid, LookupSeed> _priorities =
        TicketPrioritiesLookup.Priorities.ToDictionary(p => p.Id);

    private static readonly IReadOnlyDictionary<Guid, LookupSeed> _statuses =
        TicketStatusesLookup.Statuses.ToDictionary(p => p.Id);

    public LookupSeed GetPriority(Guid id)
    {
        if (!_priorities.TryGetValue(id, out var priority))
            throw new InvalidTicketPriorityException(id);

        return priority;
    }

    public LookupSeed GetStatus(Guid id)
    {
        if (!_statuses.TryGetValue(id, out var status))
            throw new InvalidTicketStatusException(id);

        return status;
    }

    public bool TryGetPriority(Guid id, out LookupSeed priority)
        => _priorities.TryGetValue(id, out priority!);

    public bool TryGetStatus(Guid id, out LookupSeed status)
        => _statuses.TryGetValue(id, out status!);
}

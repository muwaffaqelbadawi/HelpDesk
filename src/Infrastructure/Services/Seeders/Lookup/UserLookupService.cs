using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Infrastructure.Services.Seeders.Dtos;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Lookup;

public sealed class UserLookupService : ILookupService
{
    private static readonly IReadOnlyDictionary<Guid, LookupSeed> _statuses =
        UserStatusLookup.Statuses.ToDictionary(p => p.Id);

    public LookupSeed GetPriority(Guid id)
    {
        throw new NotImplementedException();
    }

    public LookupSeed GetStatus(Guid id)
    {
        if (!_statuses.TryGetValue(id, out var status))
            throw new InvalidUserStatusException(id);

        return status;
    }

    public bool TryGetPriority(Guid id, out LookupSeed priority)
    {
        throw new NotImplementedException();
    }

    public bool TryGetStatus(Guid id, out LookupSeed status)
    {
        throw new NotImplementedException();
    }
}

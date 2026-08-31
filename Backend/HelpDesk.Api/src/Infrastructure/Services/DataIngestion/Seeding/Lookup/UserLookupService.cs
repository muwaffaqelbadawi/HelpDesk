using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Lookup;

public sealed class UserLookupService : IUserLookupService
{
    private static readonly Dictionary<Guid, LookupSeed> Statuses =
        UserStatusLookup.Statuses.ToDictionary(p => p.Id);

    public LookupSeed GetPriority(Guid id)
    {
        throw new NotImplementedException();
    }

    public LookupSeed GetStatus(Guid id)
    {
        return !Statuses.TryGetValue(id, out var status)
            ? throw new InvalidUserStatusException(id)
            : status;
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

using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Shared.DataAccess.Repositories;

public sealed class PermissionsRepository : IPermissionsRepository
{
    public Task<int> UpdateAsync(
        Guid currentUserId,
        Guid userId, Guid permissionId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}

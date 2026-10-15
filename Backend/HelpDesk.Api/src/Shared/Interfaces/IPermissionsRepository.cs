namespace HelpDesk.src.Shared.Interfaces;

public interface IPermissionsRepository
{
    Task<int> UpdateAsync(
        Guid currentUserId,
        Guid userId,
        Guid permissionId,
        DateTimeOffset now,
        CancellationToken cancellationToken);
}

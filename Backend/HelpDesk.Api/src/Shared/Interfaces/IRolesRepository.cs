using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IRolesRepository
{
    Task AddAsync(
        ApplicationUserRole newRole,
        CancellationToken cancellationToken);

    Task<int> UpdateAsync(
        Guid currentUserId,
        Guid userId,
        Guid roleId,
        DateTimeOffset now,
        CancellationToken cancellationToken);

    Task<int> DeleteAsync(
        Guid currentUserId,
        Guid userId,
        Guid roleId,
        DateTimeOffset now,
        CancellationToken cancellationToken);
}

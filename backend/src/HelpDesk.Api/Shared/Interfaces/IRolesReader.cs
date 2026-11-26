using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IRolesReader
{
    Task<string?> GetByIdRoleAsync(
        Guid roleId,
        CancellationToken cancellationToken);

    Task<IReadOnlyCollection<string>> GetUserRoleAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<ApplicationUserRole?> GetAssignedRoleAsync(
        Guid userId,
        Guid roleId,
        CancellationToken cancellationToken);
}

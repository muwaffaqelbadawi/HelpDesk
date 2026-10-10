using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IRolesReader
{
    Task<IReadOnlyCollection<string>> GetUserRolesAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<ApplicationUserRole?> GetAssignedRolesAsync(
        Guid userId,
        Guid roleId,
        CancellationToken cancellationToken);
}

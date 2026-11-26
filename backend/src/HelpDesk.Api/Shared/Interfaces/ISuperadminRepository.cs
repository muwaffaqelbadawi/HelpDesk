using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface ISuperadminRepository
{
    Task AddAsync(
        ApplicationUser superadmin,
        string tempPassword,
        ApplicationUserRole superadminRoleEntity,
        CancellationToken cancellationToken);
}

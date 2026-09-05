using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface ISuperadminRepository
{
    Task AddAsync(
        ApplicationUser superadmin,
        string tempPassword,
        ApplicationUserRole superadminRoleEntity,
        CancellationToken cancellationToken);
}

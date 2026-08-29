using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserProvider
{
    Task<ApplicationUser?> GetUserAsync(
       CancellationToken cancellationToken = default);

    Task<IReadOnlyCollection<string>> GetRoleNamesAsync(
        ApplicationUser user);
}

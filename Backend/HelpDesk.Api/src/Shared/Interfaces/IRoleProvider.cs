using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IRoleProvider
{
    Task<IReadOnlyCollection<string>> GetRoleNamesAsync(ApplicationUser user);
}

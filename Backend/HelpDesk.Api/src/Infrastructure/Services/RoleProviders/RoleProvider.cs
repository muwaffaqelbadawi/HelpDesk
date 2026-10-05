using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Services.RoleProviders;

public sealed class RoleProvider(UserManager<ApplicationUser> userManager) : IRoleProvider
{
    public async Task<IReadOnlyCollection<string>> GetRoleNamesAsync(ApplicationUser user)
    {
        var roles = await userManager.GetRolesAsync(user);

        return [.. roles.Where(r => !string.IsNullOrWhiteSpace(r))];
    }
}

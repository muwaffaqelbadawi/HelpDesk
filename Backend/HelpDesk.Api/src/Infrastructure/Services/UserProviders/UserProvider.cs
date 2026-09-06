using System.Data;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Services.UserProviders;

public sealed class UserProvider(UserManager<ApplicationUser> userManager)
    : IUserProvider
{
    public Task<ApplicationUser?> GetUserAsync(string userId)
    {
        return userManager.FindByIdAsync(userId);
    }

    public async Task<IReadOnlyCollection<string>> GetRoleNamesAsync(ApplicationUser user)
    {
        var roles = await userManager.GetRolesAsync(user);

        return [.. roles.Where(r => !string.IsNullOrWhiteSpace(r))];
    }
}

using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.Infrastructure.Services.UserProviders;

public sealed class UserProvider(UserManager<ApplicationUser> userManager) : IUserProvider
{
    public Task<ApplicationUser?> GetUserAsync(string userId)
    {
        return userManager.FindByIdAsync(userId);
    }

    public Task<ApplicationUser?> GetUserByEmailAsync(string email)
    {
        return userManager.FindByEmailAsync(email);
    }
}

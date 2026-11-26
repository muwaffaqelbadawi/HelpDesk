using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.Infrastructure.Services.ChangePassword;

public sealed class ChangePasswordService(
    UserManager<ApplicationUser> userManager) : IChangePasswordService
{
    public async Task<IdentityResult> ChangePasswordAsync(
        ApplicationUser user,
        string currentPassword,
        string newPassword)
    {
        return await userManager.ChangePasswordAsync(
            user,
            currentPassword,
            newPassword);
    }
}

using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Services.ChangePassword;

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

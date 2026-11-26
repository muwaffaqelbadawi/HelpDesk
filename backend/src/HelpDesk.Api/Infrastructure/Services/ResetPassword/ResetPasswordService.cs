using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.Infrastructure.Services.ResetPassword;

public sealed class ResetPasswordService(
    UserManager<ApplicationUser> userManager) : IResetPasswordService
{
    public async Task<IdentityResult> ResetPasswordAsync(
        ApplicationUser user,
        string resetToken,
        string newPassword)
    {
        return await userManager.ResetPasswordAsync(
            user,
            resetToken,
            newPassword);
    }

    public async Task<string> GeneratePasswordAsync(ApplicationUser user)
    {
        return await userManager.GeneratePasswordResetTokenAsync(user);
    }
}

using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Services.ResetPassword;

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

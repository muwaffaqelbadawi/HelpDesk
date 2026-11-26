using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.Shared.Interfaces;

public interface IResetPasswordService
{
    Task<IdentityResult> ResetPasswordAsync(
        ApplicationUser user,
        string resetToken,
        string newPassword);

    Task<string> GeneratePasswordAsync(ApplicationUser user);
}

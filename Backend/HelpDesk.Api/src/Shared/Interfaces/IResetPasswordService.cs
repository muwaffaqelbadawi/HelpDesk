using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Shared.Interfaces;

public interface IResetPasswordService
{
    Task<IdentityResult> ResetPasswordAsync(
        ApplicationUser user,
        string resetToken,
        string newPassword);

    Task<string> GeneratePasswordAsync(ApplicationUser user);
}

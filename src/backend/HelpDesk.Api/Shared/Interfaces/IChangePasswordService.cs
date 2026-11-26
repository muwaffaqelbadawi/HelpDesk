using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.Shared.Interfaces;

public interface IChangePasswordService
{
    Task<IdentityResult> ChangePasswordAsync(
        ApplicationUser user,
        string currentPassword,
        string newPassword);
}

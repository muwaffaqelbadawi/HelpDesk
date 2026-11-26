using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IUserProvider
{
    Task<ApplicationUser?> GetUserAsync(string userId);

    Task<ApplicationUser?> GetUserByEmailAsync(string email);
}

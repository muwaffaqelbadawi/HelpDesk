using System.Data;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using Microsoft.AspNetCore.Identity;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.UserProviders;

public sealed class UserProvider : IUserProvider
{
    private readonly IUserContext _userContext;
    private readonly UserManager<ApplicationUser> _userManager;

    public UserProvider(
        IUserContext userContext,
        UserManager<ApplicationUser> userManager)
    {
        _userContext = userContext;
        _userManager = userManager;
    }

    public Task<ApplicationUser?> GetUserAsync(
       CancellationToken cancellationToken = default)
    {
        var userId = _userContext.UserId;

        return _userManager.FindByIdAsync(userId)
            ?? throw new AuthorizationFailedException("Unauthorized user.");
    }

    public async Task<IReadOnlyCollection<string>> GetRoleNamesAsync(
        ApplicationUser user)
    {
        var roles = await _userManager.GetRolesAsync(user);

        return roles
            .Where(r => !string.IsNullOrWhiteSpace(r))
            .ToList();
    }
}

using HelpDesk.Features.Auth.Login;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Shared.IdentityBuilders;

public sealed class IdentityResolver(
    UserManager<ApplicationUser> userManager,
    IdentityFilter identityFilter,
    ILogger<IdentityResolver> logger) : IIdentityResolver
{
    public async Task<ApplicationUser> ResolveIdentity(
        LoginCommand command,
        CancellationToken cancellationToken)
    {
        var query = userManager.Users;

        var user = await identityFilter
            .Apply(command, query)
            .FirstOrDefaultAsync(cancellationToken);

        if (user is null)
        {
            var loginType = identityFilter.IdentityType(command);

            logger.LogInformation(
                "Authentication failed: user not found by {LoginType}",
                loginType);

            throw new AuthenticationFailedException("Invalid username or password.");
        }

        return user;
    }

    public async Task ResolvePassword(
        ApplicationUser user,
        LoginCommand command)
    {
        var validPassword = await userManager.CheckPasswordAsync(
            user,
            command.Password);

        if (!validPassword)
        {
            logger.LogInformation(
                "Authentication failed: invalid password for user {UserId}",
                user.Id);

            throw new AuthenticationFailedException("Invalid username or password.");
        }
    }
}

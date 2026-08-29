using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.IdentityBuilders;

public sealed class IdentityResolvers
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IdentityFilters _userIdentityFilter;
    private readonly ILogger<IdentityResolvers> _logger;

    public IdentityResolvers(
        UserManager<ApplicationUser> userManager,
        IdentityFilters userIdentityFilter,
        ILogger<IdentityResolvers> logger)
    {
        _userManager = userManager;
        _userIdentityFilter = userIdentityFilter;
        _logger = logger;
    }

    public async Task<ApplicationUser> ResolveAsync(
        LoginCommand request,
        CancellationToken cancellationToken)
    {
        var query = _userManager.Users;

        var user = await _userIdentityFilter
            .Apply(query, request)
            .FirstOrDefaultAsync(cancellationToken);

        if (user is null)
        {
            _logger.LogWarning("Authentication failed.");


            // Resolve gracefully
            throw new AuthenticationFailedException(
                "Invalid username or password.");
        }

        return user;
    }
}

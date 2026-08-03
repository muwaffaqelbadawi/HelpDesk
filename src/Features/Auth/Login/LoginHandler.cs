using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Filters;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Auth.Login;

public sealed class LoginHandler :
    ICommandHandler<LoginCommand, LoginResponse>
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly AppDbContext _dbContext;
    private readonly IdentityResolvers _identityResolver;
    private readonly ITokenService _tokenService;
    private readonly ILogger<LoginHandler> _logger;

    public LoginHandler(
        UserManager<ApplicationUser> userManager,
        AppDbContext dbContext,
        IdentityResolvers identityResolver,
        ITokenService tokenService,
        ILogger<LoginHandler> logger)
    {
        _userManager = userManager;
        _dbContext = dbContext;
        _identityResolver = identityResolver;
        _tokenService = tokenService;
        _logger = logger;
    }

    public async Task<LoginResponse> HandleAsync(
        LoginCommand command,
        CancellationToken cancellationToken)
    {
        // Resolve the user from login form
        var user = await _identityResolver.ResolveAsync(command, cancellationToken);

        // Password should have a separate service
        var validPassword = await _userManager.CheckPasswordAsync(
            user,
            command.Password);

        // Check if the password is valid
        if (!validPassword)
        {
            _logger.LogWarning("Authentication failed.");

            // Use MediatR
            //return LoginResult.InvalidCredentials;

            throw new AuthenticationFailedException("Invalid username or password.");
        }

        // Issue new token
        var token = await _tokenService.IssueAfterLoginAsync(
            user,
            cancellationToken);

        // Get user roles (if found)
        var roles = await _dbContext.UserRoles
            .Where(ur => ur.UserId == user.Id && ur.RemovedAt == null)
            .Select(ur => ur.Role.Name)
            .ToListAsync(cancellationToken);

        // Defensive check
        if (user.UserName is null || user.Email is null)
        {
            throw new InvalidOperationException(
                $"User {user.Id} is missing required profile information.");
        }

        return new LoginResponse(
            UserData: new UserData(
                UserId: user.Id,
                UserName: user.UserName,
                Email: user.Email,
                FullEnName: user.Employee?.FullEnName,
                FullArName: user.Employee?.FullArName,
                EmployeeRowVersion: user.Employee?.RowVersion),
            Roles: roles!,
            Token: token);
    }
}

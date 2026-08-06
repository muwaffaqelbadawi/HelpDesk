using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Roles.RemoveRole;

public sealed class RemoveRoleHandler
    : ICommandHandler<RemoveRoleCommand, RemoveRoleResponse>
{
    private readonly IUserContext _userContext;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<RemoveRoleHandler> _logger;

    public RemoveRoleHandler(
        IUserContext userContext,
        UserManager<ApplicationUser> userManager,
        RoleManager<ApplicationRole> roleManager,
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<RemoveRoleHandler> logger)
    {
        _userContext = userContext;
        _userManager = userManager;
        _roleManager = roleManager;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<RemoveRoleResponse> HandleAsync(
        RemoveRoleCommand command,
        CancellationToken cancellationToken)
    {
        // Resolve admin performing the action

        var currentUserId = _userContext.GuidUserId;

        var roleId = command.RoleId.ToString();

        // Find target user
        var user = await _userManager.FindByIdAsync(command.UserId)
            ?? throw new UserNotFoundException(command.UserId);

        var role = await _roleManager.FindByIdAsync(roleId)
            ?? throw new RoleNotFoundException(roleId);

        var now = _dateTimeService.UtcNow;

        _logger.LogInformation("Admin {AdminId} removed role {Role} from user {UserId}",
            currentUserId,
            command.RoleId,
            user.Id);

        // Defensive check
        if (user.UserName is null || user.Email is null)
        {
            throw new InvalidOperationException(
                $"User {user.Id} is missing required profile information.");
        }

        var userAccountData = await _dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == user.Id)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);

        return new RemoveRoleResponse(userAccountData);
    }
}

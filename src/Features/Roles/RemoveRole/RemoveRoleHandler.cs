using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Identity;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Roles.RemoveRole;

public sealed class RemoveRoleHandler
    : ICommandHandler<RemoveRoleCommand, RemoveRoleResponse>
{
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<RemoveRoleHandler> _logger;

    public RemoveRoleHandler(
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        RoleManager<ApplicationRole> roleManager,
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<RemoveRoleHandler> logger)
    {
        _userProvider = userProvider;
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
        var currentUser = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        // Find target user
        var user = await _userManager.FindByIdAsync(command.UserId)
            ?? throw new UserNotFoundException(command.UserId);

        // Resolve the role by name (you don't have its Id yet)
        var role = await _roleManager.FindByNameAsync(command.RoleName)
            ?? throw new RoleNotFoundException(command.RoleName);

        var now = _dateTimeService.UtcNow;




        _logger.LogInformation("Admin {AdminId} removed role {Role} from user {UserId}",
            currentUser.Id,
            command.RoleName,
            user.Id);

        // Defensive check
        if (user.UserName is null || user.Email is null)
        {
            throw new InvalidOperationException(
                $"User {user.Id} is missing required profile information.");
        }

        return new RemoveRoleResponse(
            UserData: new UserData(
                UserId: user.Id,
                UserName: user.UserName,
                Email: user.Email,
                FullEnName: user.Employee?.FullEnName,
                FullArName: user.Employee?.FullArName,
                EmployeeRowVersion: user.Employee?.RowVersion));
    }
}

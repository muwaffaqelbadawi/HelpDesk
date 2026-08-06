using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Roles.Assign;

public sealed class AssignRoleHandler
    : ICommandHandler<AssignRoleCommand, AssignRoleResponse>
{
    private readonly IUserContext _userContext;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<AssignRoleHandler> _logger;

    public AssignRoleHandler(
        IUserContext userContext,
        UserManager<ApplicationUser> userManager,
        RoleManager<ApplicationRole> roleManager,
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<AssignRoleHandler> logger)
    {
        _userContext = userContext;
        _userManager = userManager;
        _roleManager = roleManager;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<AssignRoleResponse> HandleAsync(
        AssignRoleCommand command,
        CancellationToken cancellationToken)
    {
        var currentUserId = _userContext.GuidUserId;

        // Find target user
        var user = await _userManager.FindByIdAsync(command.UserId)
            ?? throw new UserNotFoundException(command.UserId);

        // Resolve the role by name (you don't have its Id yet)
        var role = await _roleManager.FindByNameAsync(command.Role)
            ?? throw new RoleNotFoundException(command.Role);

        // now
        var now = _dateTimeService.UtcNow;

        // 4. Check for an existing assignment (including soft-deleted)
        var existingAssignment = await _dbContext.UserRoles
            .IgnoreQueryFilters()
            .FirstOrDefaultAsync(x =>
                x.UserId == user.Id &&
                x.RoleId == role.Id,
                cancellationToken);

        // Reactivate or create
        if (existingAssignment is not null)
        {
            throw new DomainException($"User already has role '{command.Role}'.");
        }

        if (existingAssignment is not null)
        {
            // Reactivate the role
            existingAssignment.RemovedAt = null;
            existingAssignment.RemovedById = null;
            existingAssignment.AssignedAt = now;
            existingAssignment.AssignedById = currentUserId;
        }
        else
        {
            // Create new assignment
            _dbContext.UserRoles.Add(new ApplicationUserRole
            {
                UserId = user.Id,
                RoleId = role.Id,
                AssignedAt = now,
                AssignedById = currentUserId
            });
        }

        await _dbContext.SaveChangesAsync(cancellationToken);

        _logger.LogInformation(
            "Admin {AdminId} assigned role {Role} to user {UserId}",
            currentUserId,
            command.Role,
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

        return new AssignRoleResponse(userAccountData);
    }
}

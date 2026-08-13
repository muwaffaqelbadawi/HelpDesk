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
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<AssignRoleHandler> _logger;

    public AssignRoleHandler(
        IUserContext userContext,
        RoleManager<ApplicationRole> roleManager,
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<AssignRoleHandler> logger)
    {
        _userContext = userContext;
        _roleManager = roleManager;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<AssignRoleResponse> HandleAsync(
        AssignRoleCommand command,
        CancellationToken cancellationToken)
    {
        // admin
        var currentUserId = _userContext.GuidUserId;

        // Assigned Role
        var roleId = command.RoleId;

        // AssignedTo user
        var userId = command.UserId;

        // now
        var now = _dateTimeService.UtcNow;

        // Resolve the role by name (you don't have its Id yet)
        var role = await _roleManager.FindByIdAsync(roleId.ToString())
            ?? throw new RoleNotFoundException(roleId);

        // Check for an existing assignment (including soft-deleted)
        var existingAssignment = await _dbContext.UserRoles
            .IgnoreQueryFilters()
            .FirstOrDefaultAsync(x =>
                x.UserId == userId &&
                x.RoleId == roleId,
                cancellationToken);

        // Reactivate or create
        if (existingAssignment is not null)
        {
            throw new DomainException($"User {userId} already has role '{roleId}'.");
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
                UserId = userId,
                RoleId = roleId,
                AssignedAt = now,
                AssignedById = currentUserId
            });
        }

        await _dbContext.SaveChangesAsync(cancellationToken);

        _logger.LogInformation(
            "Admin {AdminId} assigned role {Role} to user {UserId}",
            currentUserId,
            roleId,
            userId);

        var userAccountData = await _dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == userId)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);

        return new AssignRoleResponse(userAccountData);
    }
}

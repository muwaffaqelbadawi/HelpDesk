using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Roles.Delete;

public sealed class DeleteRoleHandler
    : ICommandHandler<DeleteRoleCommand>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<DeleteRoleHandler> _logger;

    public DeleteRoleHandler(
        IUserContext userContext,
        AppDbContext context,
        IDateTimeService dateTimeService,
        ILogger<DeleteRoleHandler> logger)
    {
        _userContext = userContext;
        _dbContext = context;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task HandleAsync(
        DeleteRoleCommand command,
        CancellationToken cancellationToken)
    {
        // soft-delete an existing user role

        var currentUserId = _userContext.GuidUserId;
        var userId = command.UserId;
        var roleId = command.RoleId;

        var now = _dateTimeService.UtcNow;

        var rows = await _dbContext.UserRoles
            .Where(ur => ur.UserId == userId
                 && ur.RoleId == roleId
                 && ur.RemovedAt == null)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(ur => ur.RemovedAt, now)
                .SetProperty(ur => ur.RemovedById, currentUserId),
            cancellationToken);

        if (rows == 0)
        {
            throw new ConcurrencyException($"Role {roleId} was modified or deleted by another user.");
        }

        _logger.LogInformation("Role {RoleId} was deleted successfully", roleId);
    }
}

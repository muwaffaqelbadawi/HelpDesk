using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Roles.Delete;

public sealed class DeleteRoleHandler
    : ICommandHandler<DeleteRoleCommand>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly IRolesRepository _rolesRepository;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<DeleteRoleHandler> _logger;

    public DeleteRoleHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        IRolesRepository rolesRepository,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<DeleteRoleHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _rolesRepository = rolesRepository;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task HandleAsync(
        DeleteRoleCommand command,
        CancellationToken cancellationToken)
    {
        // admin
        var currentUserId = _userContext.GuidUserId;

        // user
        var userId = command.UserId;

        // role ID
        var roleId = command.RoleId;

        // now
        var now = _dateTimeService.UtcNow;

        var rows = await _rolesRepository.DeleteAsync(
            currentUserId,
            userId,
            roleId,
            now,
            cancellationToken);

        if (rows == 0)
        {
            throw new ConcurrencyException(
                $"Role {roleId} was modified or deleted by another user.");
        }

        // Successful log
        _logger.LogInformation("Role {RoleId} was deleted successfully",
            roleId);

        // Retrieve current user for domain event
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new RoleDeletedEvent(
                RoleId: roleId,
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);
    }
}

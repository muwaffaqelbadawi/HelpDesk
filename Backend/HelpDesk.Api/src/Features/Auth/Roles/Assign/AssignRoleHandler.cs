using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Roles.Assign;

public sealed class AssignRoleHandler
    : ICommandHandler<AssignRoleCommand, AssignRoleResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly IRolesRepository _rolesRepository;
    private readonly IDateTimeService _dateTimeService;
    private readonly IUserReader _userReader;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<AssignRoleHandler> _logger;

    public AssignRoleHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        IRolesRepository rolesRepository,
        IDateTimeService dateTimeService,
        IUserReader userReader,
        IDomainEventDispatcher dispatcher,
        ILogger<AssignRoleHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _rolesRepository = rolesRepository;
        _dateTimeService = dateTimeService;
        _userReader = userReader;
        _dispatcher = dispatcher;
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

        // if the user has roles update them
        var rows = await _rolesRepository.UpdateAsync(
        currentUserId,
        userId,
        roleId,
        now,
        cancellationToken);

        if (rows == 0)
        {
            var newRole = new ApplicationUserRole
            {
                UserId = userId,
                RoleId = roleId,
                AssignedAt = now,
                AssignedById = currentUserId
            };

            // otherwise create a new role
            await _rolesRepository.AddAsync(
                newRole,
                cancellationToken);
        }

        // Successful log
        _logger.LogInformation(
            "Admin {AdminId} assigned role {Role} to user {UserId}",
            currentUserId,
            roleId,
            userId);

        var userAccountData = await _userReader.GetByIdAsync(
            userId,
            cancellationToken);

        // Retrieve current user for domain event
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new RoleAssignedEvent(
                RoleId: roleId,
                User: user,
                OccurredAt: now),
            cancellationToken: cancellationToken);

        return new AssignRoleResponse(userAccountData);
    }
}

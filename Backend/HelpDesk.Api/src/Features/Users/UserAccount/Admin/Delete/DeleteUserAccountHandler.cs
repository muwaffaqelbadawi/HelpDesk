using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Users.UserAccount.Admin.Delete;

public sealed class DeleteUserAccountHandler :
    ICommandHandler<DeleteUserAccountCommand>
{
    private readonly IUserContext _userContext;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IUserRepository _userRepository;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<DeleteUserAccountHandler> _logger;

    public DeleteUserAccountHandler(
        IUserContext userContext,
        UserManager<ApplicationUser> userManager,
        IUserRepository userRepository,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<DeleteUserAccountHandler> logger)
    {
        _userContext = userContext;
        _userManager = userManager;
        _userRepository = userRepository;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task HandleAsync(
        DeleteUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // admin-initiated
        var currentUserId = _userContext.GuidUserId;

        // user
        var userId = command.UserId;

        // lookup user
        var user = await _userManager.FindByIdAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        var now = _dateTimeService.UtcNow;

        // Soft-delete user
        user.IsDeleted = true;
        user.StatusId = UserStatusIds.Deleted;
        user.DeletedById = currentUserId;
        user.DeletedAt = now;

        // User repo
        await _userRepository.DeleteAsync(
            user: user,
            currentUserId: currentUserId,
            now: now,
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation(
            "User: {user} password was deleted successfully.",
            user.Id);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new UserAccountDeletedEvent(
                User: user,
                OccurredAt: _dateTimeService.UtcNow),
            cancellationToken: cancellationToken);
    }
}

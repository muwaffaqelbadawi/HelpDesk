using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed class ChangePasswordHandler :
    ICommandHandler<ChangePasswordCommand, ChangePasswordResponse>
{
    private readonly IDateTimeService _dateTimeService;
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ITokenService _tokenService;
    private readonly IUserReader _userReader;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<ChangePasswordHandler> _logger;

    public ChangePasswordHandler(
        IDateTimeService dateTimeService,
        IUserContext userContext,
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        ITokenService tokenService,
        IUserReader userReader,
        IDomainEventDispatcher dispatcher,
        ILogger<ChangePasswordHandler> logger)
    {
        _dateTimeService = dateTimeService;
        _userContext = userContext;
        _userProvider = userProvider;
        _userManager = userManager;
        _tokenService = tokenService;
        _userReader = userReader;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<ChangePasswordResponse> HandleAsync(
        ChangePasswordCommand command,
        CancellationToken cancellationToken)
    {
        // Self-service
        var userId = _userContext.UserId;

        // Resolve currentUser with ID
        var user = await _userProvider.GetUserAsync(userId)
            ?? throw new AuthenticationRequiredException();

        var currentPassword = command.CurrentPassword;
        var newPassword = command.NewPassword;
        var confirmedPassword = command.ConfirmNewPassword;

        if (string.IsNullOrWhiteSpace(currentPassword))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["currentPassword"] = ["currentPassword is invalid or missing."]
                });
        }

        if (string.IsNullOrWhiteSpace(newPassword))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["newPassword"] = ["newPassword is invalid or missing."]
                });
        }

        if (string.IsNullOrWhiteSpace(confirmedPassword))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["confirmedPassword"] = ["confirmedPassword is invalid or missing."]
                });
        }

        // Change password
        var changePasswordResult = await _userManager.ChangePasswordAsync(
            user,
            currentPassword,
            newPassword);

        // Check if the password change succeeded
        if (!changePasswordResult.Succeeded)
        {
            _logger.LogWarning(
                "Failed to change password for user: {UserId}. Errors: {Errors}",
                userId,
                string.Join(", ", changePasswordResult.Errors.Select(e => e.Description)));

            throw new PasswordChangeFailedException(
                errors: new()
                {
                    ["password"] =
                    [
                        changePasswordResult.Errors.First().Description
                    ],
                });
        }

        var guidUserId = _userContext.GuidUserId;

        user.LastPasswordChangedAt = _dateTimeService.UtcNow;
        user.LastPasswordChangedById = guidUserId;
        user.MustResetPassword = false;

        await _userManager.UpdateAsync(user);

        // Issue new token
        var token = await _tokenService.IssueAfterPasswordChangeAsync(
            user,
            cancellationToken);

        // Success log
        _logger.LogInformation("User {UserId} changed password and received new tokens",
            userId);

        // Get user
        var userAccountData = await _userReader.GetByIdAsync(
            userId: user.Id,
            cancellationToken: cancellationToken);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new PasswordChangedEvent(
                User: user,
                OccurredAt: _dateTimeService.UtcNow),
            cancellationToken: cancellationToken);

        // Return response
        return new ChangePasswordResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}

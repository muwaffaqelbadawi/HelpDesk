using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Auth.ResetPassword;

public sealed class ResetPasswordHandler :
    ICommandHandler<ResetPasswordCommand, ResetPasswordResponse>
{
    private readonly IUserContext _userContext;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ITokenService _tokenService;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<ResetPasswordHandler> _logger;

    public ResetPasswordHandler(
        IUserContext userContext,
        UserManager<ApplicationUser> userManager,
        ITokenService tokenService,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<ResetPasswordHandler> logger)
    {
        _userContext = userContext;
        _userManager = userManager;
        _tokenService = tokenService;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<ResetPasswordResponse> HandleAsync(
        ResetPasswordCommand command,
        CancellationToken cancellationToken)
    {
        // Admin-initiated

        var currentUserId = _userContext.GuidUserId;

        // Find target user
        var user = await _userManager.FindByIdAsync(command.UserId.ToString())
            ?? throw new UserNotFoundException(command.UserId);

        // Generate reset token internally (admin-initiated)
        var resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);

        // Reset password using the reset token
        var result = await _userManager.ResetPasswordAsync(
            user,
            resetToken,
            command.NewPassword);

        // Check if the password reset succeeded
        if (!result.Succeeded)
        {
            _logger.LogWarning(
                "Admin {AdminId} failed to reset password for user {UserId}. Errors: {Errors}",
                currentUserId,
                user.Id,
                string.Join(", ", result.Errors.Select(e => e.Description)));

            // Check for specific error types
            if (result.Errors.Any(e => e.Code == "InvalidToken"))
            {
                throw new AuthenticationFailedException("Reset token is invalid or expired.");
            }

            throw new PasswordResetFailedException(
                errors: new()
                {
                    ["password"] =
                    [
                        result.Errors.First().Description
                    ],
                });
        }

        user.LastPasswordChangedAt = _dateTimeService.UtcNow;
        user.LastPasswordChangedById = currentUserId;
        user.MustChangePassword = true;

        // Update the user entity in the database
        await _userManager.UpdateAsync(user);

        // Issue new token
        var token = await _tokenService.IssueAfterResetPasswordAsync(
            user,
            cancellationToken);

        // Get user
        var userAccountData = await _userReader.GetByIdAsync(
            userId: user.Id,
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation(
            "User {UserId} password was reset successfully by admin: {admin}",
            user.Id,
            currentUserId);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new PasswordResetEvent(
                User: user,
                OccurredAt: _dateTimeService.UtcNow),
            cancellationToken: cancellationToken);

        // Return response
        return new ResetPasswordResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}

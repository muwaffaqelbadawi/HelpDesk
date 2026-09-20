using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Auth.ResetPassword.Admin;

public sealed class AdminResetPasswordHandler :
    ICommandHandler<AdminResetPasswordCommand, AdminResetPasswordResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;

    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ITokenService _tokenService;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<AdminResetPasswordHandler> _logger;

    public AdminResetPasswordHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        ITokenService tokenService,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<AdminResetPasswordHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _userManager = userManager;
        _tokenService = tokenService;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<AdminResetPasswordResponse> HandleAsync(
        AdminResetPasswordCommand command,
        CancellationToken cancellationToken)
    {
        // Admin-initiated

        var currentUserId = _userContext.GuidUserId;

        // Get user by ID
        var user = await _userProvider.GetUserAsync(command.UserId.ToString())
            ?? throw new AuthenticationRequiredException();






        // Move it to reset password service
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
                "ailed to reset password for user {UserId} by admin {admin}. Errors: {Errors}",
                user.Id,
                currentUserId,
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
        user.MustResetPassword = true;





        // Move it to repository
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
            @event: new AdminPasswordResetEvent(
                User: user,
                OccurredAt: _dateTimeService.UtcNow),
            cancellationToken: cancellationToken);

        // Return response
        return new AdminResetPasswordResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}

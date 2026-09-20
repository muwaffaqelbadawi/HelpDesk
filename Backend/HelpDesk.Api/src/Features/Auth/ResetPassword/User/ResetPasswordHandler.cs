using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed class ResetPasswordHandler :
    ICommandHandler<ResetPasswordCommand, ResetPasswordResponse>
{
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ITokenService _tokenService;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<ResetPasswordHandler> _logger;

    public ResetPasswordHandler(
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        ITokenService tokenService,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<ResetPasswordHandler> logger)
    {
        _userProvider = userProvider;
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
        // Anonymous service
        var userId = command.UserId;

        //Get current user
        var user = await _userProvider.GetUserAsync(userId)
            ?? throw new AuthenticationRequiredException();

        // Reset password using the reset token
        var result = await _userManager.ResetPasswordAsync(
            user,
            command.ResetToken,
            command.NewPassword);

        // Check if the password reset succeeded
        if (!result.Succeeded)
        {
            _logger.LogWarning(
                "Failed to reset password for user: {ser}." +
                "Errors: {Errors}.",
                userId,
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
        user.LastPasswordChangedById = user.Id;
        user.MustResetPassword = false;




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
            "User: {user} password was reset successfully.",
            userId);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new ResetPasswordEvent(
                User: user,
                OccurredAt: _dateTimeService.UtcNow),
            cancellationToken: cancellationToken);

        // Return response
        return new ResetPasswordResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}

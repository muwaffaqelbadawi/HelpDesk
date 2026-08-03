using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Auth.ForgotPassword.ResetForgottenPassword;

public sealed class ResetForgottenPasswordHandler :
    ICommandHandler<ResetForgottenPasswordCommand, ResetForgottenPasswordResponse>
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IDateTimeService _dateTimeService;
    private readonly ITokenService _tokenService;
    private readonly ILogger<ResetForgottenPasswordHandler> _logger;

    public ResetForgottenPasswordHandler(
        UserManager<ApplicationUser> userManager,
        IDateTimeService dateTimeService,
        ITokenService tokenService,
        ILogger<ResetForgottenPasswordHandler> logger)
    {
        _userManager = userManager;
        _dateTimeService = dateTimeService;
        _tokenService = tokenService;
        _logger = logger;
    }

    public async Task<ResetForgottenPasswordResponse> HandleAsync(
        ResetForgottenPasswordCommand command,
        CancellationToken cancellationToken)
    {
        // Find user by ID
        var user = await _userManager.FindByIdAsync(command.UserId)
            ?? throw new UserNotFoundException(command.UserId);

        // Reset password using the reset token
        var result = await _userManager.ResetPasswordAsync(
            user,
            command.Token,
            command.NewPassword);

        // Check if the password reset succeeded
        if (!result.Succeeded)
        {
            _logger.LogWarning(
                "Password reset failed for user {UserId}. Errors: {Errors}",
                user.Id,
                string.Join(", ", result.Errors.First().Description));

            if (result.Errors.Any(e => e.Code == "InvalidToken"))
            {
                throw new AuthenticationFailedException("Reset token is invalid or expired.");
            }

            throw new PasswordResetFailedException(new()
            {
                ["username"] =
                [
                    result.Errors.First().Description
                ],
            });
        }

        user.LastPasswordChangedAt = _dateTimeService.UtcNow;
        user.LastPasswordChangedById = user.Id;
        user.MustChangePassword = false;

        await _userManager.UpdateAsync(user);

        // Issue new token
        var token = await _tokenService.IssueAfterResetForgottenPasswordAsync(
            user,
            cancellationToken);

        _logger.LogInformation(
            "User {UserId} reset their password via forgot password flow",
            user.Id);

        // Defensive check
        if (user.UserName is null || user.Email is null)
        {
            throw new InvalidOperationException(
                $"User {user.Id} is missing required profile information.");
        }

        return new ResetForgottenPasswordResponse(
            UserData: new UserData(
                UserId: user.Id,
                UserName: user.UserName,
                Email: user.Email,
                FullEnName: user.Employee?.FullEnName,
                FullArName: user.Employee?.FullArName,
                EmployeeRowVersion: user.Employee?.RowVersion));
    }
}

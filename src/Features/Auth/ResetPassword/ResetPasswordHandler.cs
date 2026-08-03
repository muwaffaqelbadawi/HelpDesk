using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Auth.ResetPassword;

public sealed class ResetPasswordHandler :
    ICommandHandler<ResetPasswordCommand, ResetPasswordResponse>
{
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ITokenService _tokenService;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<ResetPasswordHandler> _logger;

    public ResetPasswordHandler(
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        ITokenService tokenService,
        IDateTimeService dateTimeService,
        ILogger<ResetPasswordHandler> logger)
    {
        _userProvider = userProvider;
        _userManager = userManager;
        _tokenService = tokenService;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<ResetPasswordResponse> HandleAsync(
        ResetPasswordCommand command,
        CancellationToken cancellationToken)
    {
        // Admin-initiated

        // Resolve admin/superadmin performing the reset
        var currentUser = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        // Find target user
        var user = await _userManager.FindByIdAsync(command.UserId)
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
                currentUser.Id,
                user.Id,
                string.Join(", ", result.Errors.Select(e => e.Description)));

            // Check for specific error types
            if (result.Errors.Any(e => e.Code == "InvalidToken"))
            {
                throw new AuthenticationFailedException("Reset token is invalid or expired.");
            }

            throw new PasswordResetFailedException(new()
            {
                ["password"] =
                [
                    result.Errors.First().Description
                ],
            });
        }

        user.LastPasswordChangedAt = _dateTimeService.UtcNow;
        user.LastPasswordChangedById = currentUser.Id;
        user.MustChangePassword = true;

        await _userManager.UpdateAsync(user);

        // Issue new token
        var token = await _tokenService.IssueAfterResetPasswordAsync(
            user,
            cancellationToken);

        _logger.LogInformation(
            "Admin {AdminId} reset password for user {UserId}",
            currentUser.Id,
            user.Id);

        // Defensive check
        if (user.UserName is null || user.Email is null)
        {
            throw new InvalidOperationException(
                $"User {user.Id} is missing required profile information.");
        }

        return new ResetPasswordResponse(
            UserData: new UserData(
                UserId: user.Id,
                UserName: user.UserName,
                Email: user.Email,
                FullEnName: user.Employee?.FullEnName,
                FullArName: user.Employee?.FullArName,
                EmployeeRowVersion: user.Employee?.RowVersion));
    }
}

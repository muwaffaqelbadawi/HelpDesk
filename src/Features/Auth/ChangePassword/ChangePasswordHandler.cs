using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed class ChangePasswordHandler :
    ICommandHandler<ChangePasswordCommand, ChangePasswordResponse>
{
    private readonly IDateTimeService _dateTimeService;
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ITokenService _tokenService;
    private readonly ILogger<ChangePasswordHandler> _logger;

    public ChangePasswordHandler(
        IDateTimeService dateTimeService,
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        ITokenService tokenService,
        ILogger<ChangePasswordHandler> logger)
    {
        _dateTimeService = dateTimeService;
        _userProvider = userProvider;
        _userManager = userManager;
        _tokenService = tokenService;
        _logger = logger;
    }

    public async Task<ChangePasswordResponse> HandleAsync(
        ChangePasswordCommand command,
        CancellationToken cancellationToken)
    {
        //self - service change

        // Resolve currentUser with ID
        var user = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        // Change password
        var changePasswordResult = await _userManager.ChangePasswordAsync(
            user,
            command.CurrentPassword,
            command.NewPassword);

        // Check if the password change succeeded
        if (!changePasswordResult.Succeeded)
        {
            _logger.LogWarning(
                "Failed to change password for user: {UserId}. Errors: {Errors}",
                user.Id.ToString(),
                string.Join(", ", changePasswordResult.Errors.Select(e => e.Description)));

            throw new PasswordChangeFailedException(new()
            {
                ["password"] =
                [
                    changePasswordResult.Errors.First().Description
                ],
            });
        }

        user.LastPasswordChangedAt = _dateTimeService.UtcNow;
        user.LastPasswordChangedById = user.Id;
        user.MustChangePassword = false;

        await _userManager.UpdateAsync(user);

        // Issue new token
        var token = await _tokenService.IssueAfterPasswordChangeAsync(
            user,
            cancellationToken);

        // Success log
        _logger.LogInformation("User {UserId} changed password and received new tokens", user.Id);

        // Defensive check
        if (user.UserName is null || user.Email is null)
        {
            throw new InvalidOperationException(
                $"User {user.Id} is missing required profile information.");
        }

        // Consider display time in user local time in the UI
        return new ChangePasswordResponse(
            UserData: new UserData(
                UserId: user.Id,
                UserName: user.UserName,
                Email: user.Email,
                FullEnName: user.Employee?.FullEnName,
                FullArName: user.Employee?.FullArName,
                EmployeeRowVersion: user.Employee?.RowVersion),
            Token: token);
    }
}

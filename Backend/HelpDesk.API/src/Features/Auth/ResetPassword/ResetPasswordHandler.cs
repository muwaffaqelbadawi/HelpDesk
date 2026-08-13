using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Auth.ResetPassword;

public sealed class ResetPasswordHandler :
    ICommandHandler<ResetPasswordCommand, ResetPasswordResponse>
{
    private readonly IUserContext _userContext;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly AppDbContext _dbContext;
    private readonly ITokenService _tokenService;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<ResetPasswordHandler> _logger;

    public ResetPasswordHandler(
        IUserContext userContext,
        UserManager<ApplicationUser> userManager,
        AppDbContext dbContext,
        ITokenService tokenService,
        IDateTimeService dateTimeService,
        ILogger<ResetPasswordHandler> logger)
    {
        _userContext = userContext;
        _userManager = userManager;
        _dbContext = dbContext;
        _tokenService = tokenService;
        _dateTimeService = dateTimeService;
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

            throw new PasswordResetFailedException(new()
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

        await _userManager.UpdateAsync(user);

        // Issue new token
        var token = await _tokenService.IssueAfterResetPasswordAsync(
            user,
            cancellationToken);

        _logger.LogInformation(
            "Admin {AdminId} reset password for user {UserId}",
            currentUserId,
            user.Id);

        var userAccountData = await _dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == user.Id)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);

        return new ResetPasswordResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}

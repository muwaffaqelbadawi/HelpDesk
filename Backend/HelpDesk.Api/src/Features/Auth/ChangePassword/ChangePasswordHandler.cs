using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed class ChangePasswordHandler :
    ICommandHandler<ChangePasswordCommand, ChangePasswordResponse>
{
    private readonly IDateTimeService _dateTimeService;
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly AppDbContext _dbContext;
    private readonly ITokenService _tokenService;
    private readonly ILogger<ChangePasswordHandler> _logger;

    public ChangePasswordHandler(
        IDateTimeService dateTimeService,
        IUserContext userContext,
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        AppDbContext dbContext,
        ITokenService tokenService,
        ILogger<ChangePasswordHandler> logger)
    {
        _dateTimeService = dateTimeService;
        _userContext = userContext;
        _userProvider = userProvider;
        _dbContext = dbContext;
        _userManager = userManager;
        _tokenService = tokenService;
        _logger = logger;
    }

    public async Task<ChangePasswordResponse> HandleAsync(
        ChangePasswordCommand command,
        CancellationToken cancellationToken)
    {
        var userId = _userContext.UserId;

        // Resolve currentUser with ID
        var user = await _userProvider.GetUserAsync(userId)
            ?? throw new AuthenticationRequiredException();

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
        _logger.LogInformation("User {UserId} changed password and received new tokens", userId);







        // Should be moved to user reader
        var userAccountData = await _dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == guidUserId)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);



        // Return response
        return new ChangePasswordResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}

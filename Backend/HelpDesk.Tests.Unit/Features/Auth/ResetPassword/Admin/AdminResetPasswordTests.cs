using HelpDesk.src.Features.Auth.ResetPassword.Admin;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.ResetPassword.Admin;

public sealed class AdminResetPasswordTests
{
    [Fact]
    public async Task Should_admin_reset_password_successfully()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var resetPasswordService = new Mock<IResetPasswordService>();
        var userRepository = new Mock<IUserRepository>();
        var tokenService = new Mock<ITokenService>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<AdminResetPasswordHandler>>();

        // SUT (System Under Test)
        var handler = new AdminResetPasswordHandler(
            userContext.Object,
            resetPasswordService.Object,
            userRepository.Object,
            tokenService.Object,
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // currentUserId
        var currentUserId = Guid.NewGuid();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(currentUserId);

        // command
        var command = new AdminResetPasswordCommand(
            Guid.NewGuid(),
            "new_password");

        // userId
        var userId = command.UserId;

        // session ID
        var sessionId = Guid.NewGuid();

        userContext
            .Setup(x => x.SessionId)
            .Returns(sessionId);

        // reset token
        var resetToken = "reset_token";

        // new password
        var newPassword = command.NewPassword;

        // user
        var user = new ApplicationUser();

        // user account data
        var userAccountData = new UserAccountData();

        // now
        var now = DateTimeOffset.UtcNow;

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        // access token
        var accessToken = "access_token";

        // refresh token
        var refreshToken = "refresh_token";

        var accessTokenExpiresAt = now.AddHours(1);
        var refreshTokenExpiresAt = now.AddDays(7);
        DateTimeOffset? userSessionExpiresAt = now.AddHours(1);

        // expected token result
        var tokenResult = new TokenResult(
            accessToken,
            refreshToken,
            accessTokenExpiresAt,
            refreshTokenExpiresAt);

        // user reader
        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        // reset password service
        resetPasswordService
            .Setup(x => x.GeneratePasswordAsync(user))
            .ReturnsAsync(resetToken);

        // reset password service
        resetPasswordService
            .Setup(x => x.ResetPasswordAsync(
                user,
                resetToken,
                newPassword))
            .ReturnsAsync(IdentityResult.Success);

        // user repository
        userRepository
            .Setup(x => x.ResetPasswordAsync(
                userId,
                now,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(1);

        // user repository
        userRepository
            .Setup(x => x.UpdateAsync(
                user,
                It.IsAny<CancellationToken>()));

        // token service
        tokenService
            .Setup(x => x.IssueAfterResetPasswordAsync(
                user,
                sessionId,
                now,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(tokenResult);

        // user reader
        userReader
            .Setup(x => x.GetByIdAsync(
                userId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(userAccountData);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}

using HelpDesk.src.Features.Auth.ChangePassword;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.ChangePassword;

public sealed class ChangePasswordTests
{
    [Fact]
    public async Task Should_change_password_successfully()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var changePasswordService = new Mock<IChangePasswordService>();
        var tokenService = new Mock<ITokenService>();
        var userRepository = new Mock<IUserRepository>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<ChangePasswordHandler>>();

        // SUT (System Under Test)
        var handler = new ChangePasswordHandler(
            userContext.Object,
            changePasswordService.Object,
            tokenService.Object,
            userRepository.Object,
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // user ID
        var userId = Guid.NewGuid();

        // create new user account data
        var userAccountData = new UserAccountData();

        // session ID
        var sessionId = Guid.NewGuid();

        // create new user account data
        var user = new ApplicationUser();

        // now
        var now = DateTimeOffset.UtcNow;

        var tokenResult = new TokenResult(
            AccessToken: "access_token",
            RefreshToken: "refresh_token",
            AccessTokenExpiresAt: now.AddHours(1),
            RefreshTokenExpiresAt: now.AddHours(2));

        var command = new ChangePasswordCommand(
            CurrentPassword: "OldPassword123!",
            NewPassword: "NewPassword123!",
            ConfirmNewPassword: "NewPassword123!");

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        userContext
            .Setup(x => x.SessionId)
            .Returns(sessionId);

        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        changePasswordService
            .Setup(x => x.ChangePasswordAsync(
                It.IsAny<ApplicationUser>(),
                It.IsAny<string>(),
                It.IsAny<string>()))
            .ReturnsAsync(IdentityResult.Success);

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        userRepository
            .Setup(x => x.UpdatePasswordAsync(
                userId,
                now,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(1);

        tokenService
            .Setup(x => x.IssueAfterPasswordChangeAsync(
                user,
                sessionId,
                now,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(tokenResult);

        userReader
            .Setup(x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(userAccountData);

        // Act + Assert: expect the handler to throw a ConcurrencyException
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Same(userAccountData, result.UserAccountData);
        Assert.Same(tokenResult, result.Token);

        userRepository.Verify(
            x => x.UpdatePasswordAsync(
                 userId,
                now,
                It.IsAny<CancellationToken>()),
            Times.Once);
    }

    [Fact]
    public async Task Should_throw_ConcurrencyException_when_password_modified()
    {
        var userContext = new Mock<IUserContext>();
        var changePasswordService = new Mock<IChangePasswordService>();
        var tokenService = new Mock<ITokenService>();
        var userRepository = new Mock<IUserRepository>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<ChangePasswordHandler>>();

        // SUT (System Under Test)
        var handler = new ChangePasswordHandler(
            userContext.Object,
            changePasswordService.Object,
            tokenService.Object,
            userRepository.Object,
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // user ID
        var userId = Guid.NewGuid();

        // create new user account data
        var userAccountData = new UserAccountData();

        // session ID
        var sessionId = Guid.NewGuid();

        // create new user account data
        var user = new ApplicationUser();

        // now
        var now = DateTimeOffset.UtcNow;

        var tokenResult = new TokenResult(
            AccessToken: "access_token",
            RefreshToken: "refresh_token",
            AccessTokenExpiresAt: now.AddHours(1),
            RefreshTokenExpiresAt: now.AddHours(2));

        var command = new ChangePasswordCommand(
            CurrentPassword: "OldPassword123!",
            NewPassword: "NewPassword123!",
            ConfirmNewPassword: "NewPassword123!");

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        userContext
            .Setup(x => x.SessionId)
            .Returns(sessionId);

        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        changePasswordService
            .Setup(x => x.ChangePasswordAsync(
                It.IsAny<ApplicationUser>(),
                It.IsAny<string>(),
                It.IsAny<string>()))
            .ReturnsAsync(IdentityResult.Success);

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        userRepository
            .Setup(x => x.UpdatePasswordAsync(
                userId,
                now,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(0);

        tokenService
            .Setup(x => x.IssueAfterPasswordChangeAsync(
                user,
                sessionId,
                now,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(tokenResult);

        userReader
            .Setup(x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(userAccountData);

        var exception = await Assert.ThrowsAsync<ConcurrencyException>(
            () => handler.HandleAsync(
                    command,
                    CancellationToken.None));
    }

    [Fact]
    public async Task Should_throw_UserNotFoundException_when_user_not_found()
    {
        var userContext = new Mock<IUserContext>();
        var changePasswordService = new Mock<IChangePasswordService>();
        var tokenService = new Mock<ITokenService>();
        var userRepository = new Mock<IUserRepository>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<ChangePasswordHandler>>();

        var handler = new ChangePasswordHandler(
            userContext.Object,
            changePasswordService.Object,
            tokenService.Object,
            userRepository.Object,
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        var userId = Guid.NewGuid();

        var command = new ChangePasswordCommand(
            CurrentPassword: "OldPassword123!",
            NewPassword: "NewPassword123!",
            ConfirmNewPassword: "NewPassword123!");

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync((ApplicationUser?)null);

        var ex = await Assert.ThrowsAsync<UserNotFoundException>(
            () => handler.HandleAsync(command, CancellationToken.None));

        changePasswordService.Verify(
            x => x.ChangePasswordAsync(
                It.IsAny<ApplicationUser>(),
                It.IsAny<string>(),
                It.IsAny<string>()),
            Times.Never);
    }

    [Fact]
    public async Task Should_throw_PasswordChangeFailedException_when_change_fails()
    {
        var userContext = new Mock<IUserContext>();
        var changePasswordService = new Mock<IChangePasswordService>();
        var tokenService = new Mock<ITokenService>();
        var userRepository = new Mock<IUserRepository>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<ChangePasswordHandler>>();

        var handler = new ChangePasswordHandler(
            userContext.Object,
            changePasswordService.Object,
            tokenService.Object,
            userRepository.Object,
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        var userId = Guid.NewGuid();
        var user = new ApplicationUser();

        var command = new ChangePasswordCommand(
            CurrentPassword: "OldPassword123!",
            NewPassword: "NewPassword123!",
            ConfirmNewPassword: "NewPassword123!");

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        changePasswordService
            .Setup(x => x.ChangePasswordAsync(
                It.IsAny<ApplicationUser>(),
                It.IsAny<string>(),
                It.IsAny<string>()))
            .ReturnsAsync(
                IdentityResult.Failed(
                    new IdentityError
                    {
                        Description = "Incorrect current password"
                    }));

        var ex = await Assert.ThrowsAsync<PasswordChangeFailedException>(
            () => handler.HandleAsync(command, CancellationToken.None));
    }
}

using HelpDesk.src.Features.Auth.ForgotPassword;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.ForgotPassword;

public sealed class ForgotPasswordTests
{
    [Fact]
    public async Task Should_forgot_password_successfully()
    {
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<ForgotPasswordHandler>>();

        // SUT (System Under Test)
        var handler = new ForgotPasswordHandler(
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // now
        var now = DateTimeOffset.UtcNow;

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        var command = new ForgotPasswordCommand(
            Guid.NewGuid(),
            "reset-token",
            "NewPassword123!",
            "NewPassword123!",
            "test@example.com");

        var user = new ApplicationUser
        {
            Id = Guid.NewGuid(),
            UserName = "testuser",
            Email = "test@example.com"
        };

        userReader
            .Setup(x => x.GetUserByEmailAsync(command.Email))
            .ReturnsAsync(user);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        Assert.Equal(
            "If the email is associated with an account, a password reset email has been sent.",
            result.Message);

        dispatcher.Verify(
           x => x.DispatchAsync(
               It.IsAny<IDomainEvent>(),
               It.IsAny<CancellationToken>()),
           Times.Once);
    }

    [Fact]
    public async Task Should_return_generic_message_when_user_username_or_email_is_missing()
    {
        // Arrange
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<ForgotPasswordHandler>>();

        var handler = new ForgotPasswordHandler(
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        var userId = Guid.NewGuid();

        var user = new ApplicationUser
        {
            Id = userId,
            UserName = null,
            Email = "user@example.com"
        };

        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        var command = new ForgotPasswordCommand(
            userId,
            string.Empty,
            string.Empty,
            string.Empty,
            string.Empty);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        Assert.Equal(
            "If the email is associated with an account, a password reset email has been sent.",
            result.Message);

        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()),
            Times.Never);
    }
}

using HelpDesk.src.Features.Auth.RevokeToken;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.RevokeToken;

public sealed class RevokeTokenTests
{
    [Fact]
    public async Task Should_revoke_current_token_and_dispatch_event()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var jwtRevocationStore = new Mock<IJwtRevocationStore>();
        var dateTimeService = new Mock<IDateTimeService>();
        var userReader = new Mock<IUserReader>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<RevokeTokenHandler>>();

        // SUT (System Under Test)
        var handler = new RevokeTokenHandler(
            userContext.Object,
            jwtRevocationStore.Object,
            dateTimeService.Object,
            userReader.Object,
            dispatcher.Object,
            logger.Object);

        // user ID
        var userId = Guid.NewGuid();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        // Jwt ID
        var jti = Guid.NewGuid();

        userContext
            .Setup(x => x.JwtId)
            .Returns(jti);

        // Jwt expiration
        var expiresAt = DateTimeOffset.UtcNow.AddMinutes(10);

        userContext
            .Setup(x => x.JwtExpiresAt)
            .Returns(expiresAt);

        // now
        var now = DateTimeOffset.UtcNow;

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        // Mock jwtRevocationStore
        jwtRevocationStore
            .Setup(x => x.RevokeAsync(
                jti,
                expiresAt,
                It.IsAny<CancellationToken>()));

        // user
        var user = new ApplicationUser();

        // user reader
        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        var command = new RevokeTokenCommand();

        // Act
        await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        jwtRevocationStore.Verify(
            x => x.RevokeAsync(
                jti,
                expiresAt,
                CancellationToken.None),
            Times.Once);

        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }

    [Fact]
    public async Task Should_not_revoke_token_when_expiration_is_missing()
    {
        var userContext = new Mock<IUserContext>();
        var jwtRevocationStore = new Mock<IJwtRevocationStore>();
        var handler = new RevokeTokenHandler(
            userContext.Object,
            jwtRevocationStore.Object,
            Mock.Of<IDateTimeService>(),
            Mock.Of<IUserReader>(),
            Mock.Of<IDomainEventDispatcher>(),
            Mock.Of<ILogger<RevokeTokenHandler>>());

        await Assert.ThrowsAsync<AuthenticationRequiredException>(
            () => handler.HandleAsync(
                new RevokeTokenCommand(),
                CancellationToken.None));

        jwtRevocationStore.Verify(
            x => x.RevokeAsync(
                It.IsAny<Guid>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()),
            Times.Never);
    }

    [Fact]
    public async Task Should_propagate_revocation_store_failures()
    {
        var expectedException = new InvalidOperationException("Store unavailable.");

        var jwtRevocationStore = new Mock<IJwtRevocationStore>();

        jwtRevocationStore
            .Setup(x => x.RevokeAsync(
                It.IsAny<Guid>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()))
            .ThrowsAsync(expectedException);

        var userContext = new Mock<IUserContext>();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(Guid.NewGuid());

        userContext
            .Setup(x => x.JwtId)
            .Returns(Guid.NewGuid());

        userContext
            .Setup(x => x.JwtExpiresAt)
            .Returns(DateTimeOffset.UtcNow.AddMinutes(10));

        var handler = new RevokeTokenHandler(
            userContext.Object,
            jwtRevocationStore.Object,
            Mock.Of<IDateTimeService>(),
            Mock.Of<IUserReader>(),
            Mock.Of<IDomainEventDispatcher>(),
            Mock.Of<ILogger<RevokeTokenHandler>>());

        var exception = await Assert.ThrowsAsync<InvalidOperationException>(
            () => handler.HandleAsync(
                new RevokeTokenCommand(),
                CancellationToken.None));

        Assert.Same(expectedException, exception);
    }
}

using HelpDesk.src.Features.Auth.UserSession.Activity;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Middleware;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Http;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Infrastructure.Middleware;

public sealed class UserSessionActivityMiddlewareTests
{
    [Fact]
    public async Task Should_not_renew_credentials_for_unauthenticated_requests()
    {
        var userContext = new Mock<IUserContext>();
        userContext.SetupGet(x => x.IsAuthenticated).Returns(false);
        var handler = new Mock<ICommandHandler<UserSessionActivityCommand>>();
        var reader = new Mock<IRefreshTokenReader>();
        var context = new DefaultHttpContext();
        var middleware = new UserSessionActivityMiddleware(_ => Task.CompletedTask);
        var dateTimeService = new Mock<IDateTimeService>();

        await middleware.InvokeAsync(
            context,
            userContext.Object,
            handler.Object,
            reader.Object,
            dateTimeService.Object);

        // now
        var now = DateTimeOffset.UtcNow;

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        Assert.Equal(0, context.Response.Headers.SetCookie.Count);

        handler.Verify(x => x.HandleAsync(
            It.IsAny<UserSessionActivityCommand>(),
            It.IsAny<CancellationToken>()), Times.Never);


        reader.Verify(x => x.GetActiveRefreshTokenAsync(
            It.IsAny<Guid>(),
            It.IsAny<Guid>(),
            It.IsAny<DateTimeOffset>(),
            It.IsAny<CancellationToken>()), Times.Never);
    }

    [Fact]
    public async Task Should_renew_only_the_existing_refresh_cookie_after_activity()
    {
        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var refreshExpiresAt = DateTimeOffset.UtcNow.AddDays(7);
        var userContext = new Mock<IUserContext>();
        userContext.SetupGet(x => x.IsAuthenticated).Returns(true);
        userContext.SetupGet(x => x.GuidUserId).Returns(userId);
        userContext.SetupGet(x => x.SessionId).Returns(sessionId);

        var handler = new Mock<ICommandHandler<UserSessionActivityCommand>>();

        handler
            .Setup(x => x.HandleAsync(
                new UserSessionActivityCommand(sessionId),
                It.IsAny<CancellationToken>()))
            .Returns(Task.CompletedTask);

        var refreshTokenReader = new Mock<IRefreshTokenReader>();
        var dateTimeService = new Mock<IDateTimeService>();

        // now
        var now = DateTimeOffset.UtcNow;

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        refreshTokenReader
            .Setup(x => x.GetActiveRefreshTokenAsync(
                userId,
                sessionId,
                now,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(new ApplicationRefreshToken
            {
                Token = "existing-refresh-token",
                ExpiresAt = refreshExpiresAt
            });

        var context = new DefaultHttpContext();
        context.Request.Path = "/api/users/me";
        var middleware = new UserSessionActivityMiddleware(_ => Task.CompletedTask);

        await middleware.InvokeAsync(
            context,
            userContext.Object,
            handler.Object,
            refreshTokenReader.Object,
            dateTimeService.Object);

        var cookies = context.Response.Headers.SetCookie.ToString();

        Assert.Contains("refresh_token=existing-refresh-token", cookies);
        Assert.Contains("path=/api/auth/refresh-token", cookies, StringComparison.OrdinalIgnoreCase);
        Assert.Contains("httponly", cookies, StringComparison.OrdinalIgnoreCase);
        Assert.Contains("secure", cookies, StringComparison.OrdinalIgnoreCase);
        Assert.Contains("samesite=strict", cookies, StringComparison.OrdinalIgnoreCase);
        Assert.DoesNotContain("access_token=", cookies);
        Assert.Contains(refreshExpiresAt.ToString("R"), cookies);

        refreshTokenReader.Verify(x => x.GetActiveRefreshTokenAsync(
            userId,
            sessionId,
            now,
            It.IsAny<CancellationToken>()), Times.Once);
    }

    [Theory]
    [InlineData("/api/auth/login")]
    [InlineData("/api/auth/refresh-token")]
    [InlineData("/api/auth/logout")]
    [InlineData("/api/auth/change-password")]
    [InlineData("/api/auth/logout/")]
    public async Task Should_not_renew_refresh_cookie_on_auth_cookie_endpoints(
        string path)
    {
        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var userContext = new Mock<IUserContext>();
        var handler = new Mock<ICommandHandler<UserSessionActivityCommand>>();
        var reader = new Mock<IRefreshTokenReader>();
        var context = new DefaultHttpContext();
        var dateTimeService = new Mock<IDateTimeService>();

        userContext.SetupGet(x => x.IsAuthenticated).Returns(true);
        userContext.SetupGet(x => x.GuidUserId).Returns(userId);
        userContext.SetupGet(x => x.SessionId).Returns(sessionId);

        // now
        var now = DateTimeOffset.UtcNow;

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        handler
            .Setup(x => x.HandleAsync(
                It.IsAny<UserSessionActivityCommand>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.CompletedTask);

        context.Request.Path = path;

        var middleware = new UserSessionActivityMiddleware(httpContext =>
        {
            if (path.EndsWith("/logout", StringComparison.Ordinal))
            {
                httpContext.Response.Cookies.Delete(
                    "refresh_token",
                    new CookieOptions { Path = "/api/auth/refresh-token" });
            }

            return Task.CompletedTask;
        });

        await middleware.InvokeAsync(
            context,
            userContext.Object,
            handler.Object,
            reader.Object,
            dateTimeService.Object);

        reader.Verify(x => x.GetActiveRefreshTokenAsync(
            It.IsAny<Guid>(),
            It.IsAny<Guid>(),
            now,
            It.IsAny<CancellationToken>()), Times.Never);
        handler.Verify(x => x.HandleAsync(
            It.IsAny<UserSessionActivityCommand>(),
            It.IsAny<CancellationToken>()),
            path.EndsWith("/change-password", StringComparison.Ordinal)
                ? Times.Once
                : Times.Never);
        var cookies = context.Response.Headers.SetCookie;
        if (path.EndsWith("/logout", StringComparison.Ordinal))
        {
            Assert.Single(cookies);
            Assert.Contains("expires=", cookies[0], StringComparison.OrdinalIgnoreCase);
        }
        else
        {
            Assert.Equal(0, cookies.Count);
        }
    }
}

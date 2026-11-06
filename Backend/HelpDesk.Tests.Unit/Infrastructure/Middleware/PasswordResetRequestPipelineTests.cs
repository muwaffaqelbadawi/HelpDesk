using HelpDesk.src.Features.Auth.ChangePassword;
using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Features.Auth.UserSession;
using HelpDesk.src.Infrastructure.Behaviors;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Middleware;
using HelpDesk.src.Infrastructure.PipeLines;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Infrastructure.Services.ResetPassword;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Infrastructure.Middleware;

public sealed class PasswordResetRequestPipelineTests
{
    [Fact]
    public async Task Should_allow_password_reset_user_to_change_password_after_session_activity()
    {
        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var now = DateTimeOffset.UtcNow;
        var cancellationToken = TestContext.Current.CancellationToken;
        var user = new ApplicationUser
        {
            Id = userId,
            MustResetPassword = true
        };
        var userContext = new Mock<IUserContext>();
        userContext.SetupGet(x => x.IsAuthenticated).Returns(true);
        userContext.SetupGet(x => x.UserId).Returns(userId.ToString());
        userContext.SetupGet(x => x.GuidUserId).Returns(userId);
        userContext.SetupGet(x => x.SessionId).Returns(sessionId);
        userContext.SetupGet(x => x.TraceId).Returns("trace-id");
        userContext.SetupGet(x => x.CorrelationId).Returns("correlation-id");

        var userReader = new Mock<IUserReader>();
        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);
        userReader
            .Setup(x => x.GetByIdAsync(userId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(new UserAccountData());

        var policy = new ResetPasswordPolicy(
            new ResetPasswordState(userContext.Object, userReader.Object));

        var changePasswordService = new Mock<IChangePasswordService>();
        changePasswordService
            .Setup(x => x.ChangePasswordAsync(
                user,
                It.IsAny<string>(),
                It.IsAny<string>()))
            .ReturnsAsync(IdentityResult.Success);

        var userRepository = new Mock<IUserRepository>();
        userRepository
            .Setup(x => x.UpdatePasswordAsync(
                userId,
                now,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(1);

        var token = new TokenResult(
            "access-token",
            "refresh-token",
            now.AddHours(1),
            now.AddHours(2));
        var tokenService = new Mock<ITokenService>();
        tokenService
            .Setup(x => x.IssueAfterPasswordChangeAsync(
                user,
                sessionId,
                now,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(token);

        var dateTimeService = new Mock<IDateTimeService>();
        dateTimeService.SetupGet(x => x.UtcNow).Returns(now);
        var dispatcher = new Mock<IDomainEventDispatcher>();
        dispatcher
            .Setup(x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.CompletedTask);

        var changePasswordHandler = new ChangePasswordHandler(
            userContext.Object,
            changePasswordService.Object,
            tokenService.Object,
            userRepository.Object,
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            Mock.Of<ILogger<ChangePasswordHandler>>());
        var changePasswordCommand = new ChangePasswordCommand(
            "CurrentPassword123!",
            "NewPassword123!",
            "NewPassword123!");
        var changePasswordPipeline =
            new CommandHandlerPipeline<ChangePasswordCommand, ChangePasswordResponse>(
                changePasswordHandler,
                [
                    new ValidationBehavior<ChangePasswordCommand, ChangePasswordResponse>(
                        [new ChangePasswordValidator()]),
                    new PasswordResetBehavior<ChangePasswordCommand, ChangePasswordResponse>(
                        policy)
                ]);

        var sessionActivityHandler =
            new Mock<ICommandHandler<UserSessionActivityCommand>>();
        sessionActivityHandler
            .Setup(x => x.HandleAsync(
                It.IsAny<UserSessionActivityCommand>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.CompletedTask);
        var sessionActivityPipeline =
            new CommandHandlerPipeline<UserSessionActivityCommand>(
                sessionActivityHandler.Object,
                [
                    new ValidationBehavior<UserSessionActivityCommand>([]),
                    new PasswordResetBehavior<UserSessionActivityCommand>(policy)
                ]);

        var changePasswordReached = false;
        var sessionActivityMiddleware = new UserSessionActivityMiddleware(
            async context =>
            {
                changePasswordReached = true;
                await changePasswordPipeline.HandleAsync(
                    changePasswordCommand,
                    context.RequestAborted);
                context.Response.StatusCode = StatusCodes.Status200OK;
            });
        var exceptionMiddleware = new ExceptionMiddleware(
            context => sessionActivityMiddleware.InvokeAsync(
                context,
                userContext.Object,
                sessionActivityPipeline,
                Mock.Of<IRefreshTokenReader>(),
                Mock.Of<IDateTimeService>()));
        var httpContext = new DefaultHttpContext();
        httpContext.Request.Path = "/api/auth/change-password";
        httpContext.RequestAborted = cancellationToken;
        httpContext.Response.Body = new MemoryStream();

        await exceptionMiddleware.InvokeAsync(
            httpContext,
            Mock.Of<IApiContext>(x => x.BaseUrl == "https://localhost/api"),
            userContext.Object);

        httpContext.Response.Body.Position = 0;
        using var reader = new StreamReader(httpContext.Response.Body);
        var responseBody = await reader.ReadToEndAsync(cancellationToken);

        Assert.Equal(StatusCodes.Status200OK, httpContext.Response.StatusCode);
        Assert.DoesNotContain("Password reset is required before continuing.", responseBody);
        Assert.True(changePasswordReached);
        sessionActivityHandler.Verify(
            x => x.HandleAsync(
                It.IsAny<UserSessionActivityCommand>(),
                cancellationToken),
            Times.Once);
        changePasswordService.Verify(
            x => x.ChangePasswordAsync(
                user,
                changePasswordCommand.CurrentPassword,
                changePasswordCommand.NewPassword),
            Times.Once);
        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                cancellationToken),
            Times.Once);

        var loginBehavior = new PasswordResetBehavior<LoginCommand, LoginResponse>(policy);
        var downstreamFailure = new InvalidOperationException("Login handler reached.");
        var exception = await Assert.ThrowsAsync<InvalidOperationException>(
            () => loginBehavior.HandleAsync(
                new LoginCommand("test-user", "password"),
                () => Task.FromException<LoginResponse>(downstreamFailure),
                cancellationToken));

        Assert.Same(downstreamFailure, exception);

        var ordinaryBehavior =
            new PasswordResetBehavior<OrdinaryApplicationCommand>(policy);
        await Assert.ThrowsAsync<PasswordResetRequiredException>(
            () => ordinaryBehavior.HandleAsync(
                new OrdinaryApplicationCommand(),
                () => Task.CompletedTask,
                cancellationToken));
    }

    private sealed record OrdinaryApplicationCommand;
}

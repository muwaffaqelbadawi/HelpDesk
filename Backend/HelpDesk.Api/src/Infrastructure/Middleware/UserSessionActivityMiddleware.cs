using HelpDesk.src.Features.Auth.UserSession.Activity;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Middleware;

public sealed class UserSessionActivityMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(
        HttpContext context,
        IUserContext userContext,
        ICommandHandler<UserSessionActivityCommand> userSessionActivityHandler,
        IRefreshTokenReader refreshTokenReader,
        IDateTimeService dateTimeService)
    {
        if (SkipsActivity(context.Request.Path))
        {
            await next(context);
            return;
        }

        if (!userContext.IsAuthenticated)
        {
            await next(context);
            return;
        }

        var sessionId = userContext.SessionId;

        var command = new UserSessionActivityCommand(sessionId);

        await userSessionActivityHandler.HandleAsync(
            command,
            context.RequestAborted);

        if (ShouldRenewRefreshCookie(context.Request.Path))
        {
            var refreshToken = await refreshTokenReader.GetActiveRefreshTokenAsync(
                userContext.GuidUserId,
                sessionId,
                dateTimeService.UtcNow,
                context.RequestAborted);

            if (refreshToken?.ExpiresAt is not null)
            {
                context.Response.SetRefreshTokenCookie(
                    refreshToken.Token,
                    refreshToken.ExpiresAt.Value);
            }
        }

        await next(context);
    }

    private static bool ShouldRenewRefreshCookie(PathString path)
    {
        return !IsPath(path, "/api/auth/refresh-token")
            && !IsPath(path, "/api/auth/logout")
            && !IsPath(path, "/api/auth/change-password")
            && !IsPath(path, "/api/auth/login");
    }

    private static bool SkipsActivity(PathString path)
    {
        return IsPath(path, "/api/auth/login")
            || IsPath(path, "/api/auth/refresh-token")
            || IsPath(path, "/api/auth/logout");
    }

    private static string NormalizePath(PathString path) =>
        path.Value?.TrimEnd('/') ?? string.Empty;

    private static bool IsPath(PathString path, string expectedPath) =>
        NormalizePath(path).Equals(expectedPath, StringComparison.OrdinalIgnoreCase);
}

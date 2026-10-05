using HelpDesk.src.Infrastructure.Middleware;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class UserSessionActivityMiddlewareExtension
{
    public static WebApplication UseUserSessionActivity(
        this WebApplication app)
    {
        app.UseMiddleware<UserSessionActivityMiddleware>();

        return app;
    }
}

using HelpDesk.Infrastructure.Middleware;

namespace HelpDesk.Infrastructure.Extensions;

public static class UserSessionActivityMiddlewareExtension
{
    public static WebApplication UseUserSessionActivity(
        this WebApplication app)
    {
        app.UseMiddleware<UserSessionActivityMiddleware>();

        return app;
    }
}

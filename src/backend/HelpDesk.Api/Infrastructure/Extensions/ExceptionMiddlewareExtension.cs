using HelpDesk.Infrastructure.Middleware;

namespace HelpDesk.Infrastructure.Extensions;

public static class ExceptionMiddlewareExtension
{
    public static WebApplication UseExceptionHandling(
        this WebApplication app)
    {
        app.UseMiddleware<ExceptionMiddleware>();

        return app;
    }
}

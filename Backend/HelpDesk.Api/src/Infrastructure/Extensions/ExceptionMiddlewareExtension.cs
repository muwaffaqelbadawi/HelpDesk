using HelpDesk.src.Infrastructure.Middleware;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class ExceptionMiddlewareExtension
{
    public static WebApplication UseExceptionHandling(
        this WebApplication app)
    {
        app.UseMiddleware<ExceptionMiddleware>();

        return app;
    }
}

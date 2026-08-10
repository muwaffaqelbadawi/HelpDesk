using HelpDesk.src.Shared.Interfaces;
using Serilog;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class LoggingMiddlewareExtension
{
    public static WebApplication UseApplicationLogging(
        this WebApplication app)
    {
        var logger = app.Logger;

        // Application started
        app.Lifetime.ApplicationStarted.Register(() =>
            logger.LogInformation("Application started."));

        // Application stopping
        app.Lifetime.ApplicationStopping.Register(() =>
            logger.LogInformation("Application stopping."));

        // Serilog Request
        app.UseSerilogRequestLogging(options =>
            options.EnrichDiagnosticContext = (ctx, httpContext) =>
            {
                var userContext = httpContext.RequestServices
                    .GetRequiredService<IUserContext>();

                ctx.Set(
                    "UserId",
                    userContext.IsAuthenticated
                    ? userContext.UserId
                    : null!);

                ctx.Set(
                    "Username",
                    userContext.IsAuthenticated
                    ? userContext.UserName
                    : null!);

                ctx.Set("Browser", userContext.Browser ?? "Unknown");
                ctx.Set("UserAgent", userContext.UserAgent ?? "Unknown");
                ctx.Set("IPAddress", userContext.IpAddress ?? "Unknown");
                ctx.Set("TraceId", userContext.TraceId);
            });

        return app;
    }
}

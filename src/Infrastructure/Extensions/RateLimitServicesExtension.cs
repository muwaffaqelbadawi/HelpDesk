using Microsoft.AspNetCore.RateLimiting;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class RateLimitServicesExtension
{
    public static WebApplicationBuilder AddRateLimitServices(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddRateLimiter(options =>
        {
            options.AddFixedWindowLimiter("fixed", config =>
            {
                config.PermitLimit = 100;
                config.Window = TimeSpan.FromSeconds(10);
                config.QueueLimit = 0;
            });

            options.OnRejected = async (context, token) =>
            {
                context.HttpContext.Response.StatusCode = 429;

                await context.HttpContext.Response.WriteAsJsonAsync(new
                {
                    message = "Too many requests. Please try again later."
                }, token);
            };
        });

        return builder;
    }
}

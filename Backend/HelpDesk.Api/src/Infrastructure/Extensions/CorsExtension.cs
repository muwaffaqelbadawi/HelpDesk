using HelpDesk.src.Infrastructure.Services.Cors;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class CorsExtension
{
    public static IServiceCollection AddFrontendCors(
        this IServiceCollection services,
        WebApplicationBuilder builder)
    {
        // Bind Cors configs
        var corsOptions = builder.Configuration
            .GetSection("Cors")
            .Get<CorsOptions>()
            ?? throw new InvalidOperationException(
                "CORS configuration section is missing or invalid.");

        services.AddCors(options =>
            options.AddPolicy(corsOptions.Name, policy
                => policy
                    .WithOrigins(corsOptions.Origin)
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials()));

        return services;
    }
}

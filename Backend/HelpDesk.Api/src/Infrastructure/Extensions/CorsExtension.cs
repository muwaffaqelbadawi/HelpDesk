using HelpDesk.src.Infrastructure.Services.Cors;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class CorsExtension
{
    public static WebApplicationBuilder AddCorsConfiguration(
       this WebApplicationBuilder builder,
       IConfiguration configuration)
    {
        builder.Services
            .AddOptions<CorsOptions>()
            .Bind(configuration.GetSection("Cors"))
            .ValidateOnStart();

        return builder;
    }

    public static WebApplicationBuilder AddFrontendCors(
        this WebApplicationBuilder builder,
        IConfiguration configuration)
    {
        var corsSection = configuration.GetSection("Cors");

        builder.Services
            .AddOptions<CorsOptions>()
            .Bind(corsSection)
            .ValidateOnStart();

        var corsOptions = corsSection.Get<CorsOptions>()!;

        builder.Services.AddCors(options =>
        {
            options.AddPolicy(corsOptions.Name, policy =>
                policy.WithOrigins(corsOptions.Origins)
                      .AllowAnyHeader()
                      .AllowAnyMethod()
                      .AllowCredentials());
        });

        return builder;
    }
}

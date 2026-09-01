using HelpDesk.src.Infrastructure.Services.Cors;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class CorsExtension
{
    public static WebApplicationBuilder AddCorsConfigs(
       this WebApplicationBuilder builder)
    {
        builder.Services
            .AddOptions<CorsOptions>()
            .Bind(builder.Configuration.GetSection("Cors"))
            .ValidateOnStart();

        return builder;
    }

    public static WebApplicationBuilder AddCorsOptions(
        this WebApplicationBuilder builder)
    {
        builder.AddCorsConfigs();

        var corsSection = builder.Configuration.GetSection("Cors");

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

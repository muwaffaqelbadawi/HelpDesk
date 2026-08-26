using HelpDesk.src.Infrastructure.Services.Cors;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class ApplicationMiddlewareExtension
{
    public static async Task<WebApplication> UseApplication(
        this WebApplication app,
        WebApplicationBuilder builder)
    {
        // Bind Cors configs
        var corsOptions = builder.Configuration
            .GetSection("Cors")
            .Get<CorsOptions>()
            ?? throw new InvalidOperationException(
                "CORS configuration section is missing or invalid.");

        await app.InitializeDatabaseAsync();

        app
            .UseApplicationLogging()
            .UseExceptionHandling()
            .UseSwaggerDocumentation()
            .UseHttpsRedirection()
            .UseCors(corsOptions.Name)
            .UseAuthentication()
            .UseAuthorization();

        app.MapControllers();

        return app;
    }
}

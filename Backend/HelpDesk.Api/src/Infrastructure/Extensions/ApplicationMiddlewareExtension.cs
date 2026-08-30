using HelpDesk.src.Infrastructure.Services.Cors;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class ApplicationMiddlewareExtension
{
    public static async Task<WebApplication> UseApplication(
        this WebApplication app)
    {
        var corsOptions = app.Services
            .GetRequiredService<IOptions<CorsOptions>>()
            .Value;

        await app.InitializeDatabaseAsync();

        app
            .UseScrutorTestsServices() // Test the Scrutor registration of services
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

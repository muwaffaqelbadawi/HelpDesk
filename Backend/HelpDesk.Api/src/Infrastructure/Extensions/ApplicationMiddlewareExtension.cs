using HelpDesk.src.Infrastructure.Services.Cors;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class ApplicationMiddlewareExtension
{
    public static async Task<WebApplication> UseApplication(
        this WebApplication app)
    {
        var corsOptions = app.Services.GetRequiredService<IOptions<CorsOptions>>().Value;

        await app.InitializeDatabaseAsync();
        app.UseScrutorTestsServices();
        app.UseApplicationLogging();
        app.UseExceptionHandling();
        app.UseSwaggerDocumentation();
        app.UseHttpsRedirection();
        app.UseCors(corsOptions.Name);
        app.UseAuthentication();
        app.UseUserSessionActivity();
        app.UseAuthorization();
        app.MapControllers();

        return app;
    }
}

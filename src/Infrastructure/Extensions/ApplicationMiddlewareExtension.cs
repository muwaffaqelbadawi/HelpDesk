namespace HelpDesk.src.Infrastructure.Extensions;

public static class ApplicationMiddlewareExtension
{
    public static async Task<WebApplication> UseApplication(
        this WebApplication app)
    {
        await app.InitializeDatabaseAsync();

        app
            .UseApplicationLogging()
            .UseExceptionHandling()
            .UseSwaggerDocumentation()
            .UseHttpsRedirection()
            .UseAuthentication()
            .UseAuthorization();

        app.MapControllers();

        return app;
    }
}

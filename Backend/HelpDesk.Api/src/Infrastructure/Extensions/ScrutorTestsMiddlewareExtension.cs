namespace HelpDesk.src.Infrastructure.Extensions;

public static class ScrutorTestsMiddlewareExtension
{
    public static WebApplication UseScrutorTestsServices(
        this WebApplication app)
    {
        return app;
    }
}
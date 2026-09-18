namespace HelpDesk.src.Infrastructure.Extensions;

public static class ScrutorTestsMiddlewareExtension
{
    public static WebApplication UseScrutorTestsServices(
        this WebApplication app)
    {
        //using var scope = app.Services.CreateScope();

        //var sessionHandler = app.Services.GetService<IDomainEventHandler<LogInEvent>>();

        return app;
    }
}
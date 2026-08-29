namespace HelpDesk.src.Infrastructure.Extensions;

public static class SwaggerMiddlewareExtension
{
    public static WebApplication UseSwaggerDocumentation(
        this WebApplication app)
    {
        app.UseSwagger();


        app.UseSwaggerUI(options =>
        {
            options.DocumentTitle = "HelpDesk API";
            options.DisplayRequestDuration();
            options.EnablePersistAuthorization();
        });


        return app;
    }
}

namespace HelpDesk.src.Infrastructure.Extensions;

public static class ApplicationServicesExtension
{
    public static WebApplicationBuilder AddApplicationServices(
        this WebApplicationBuilder builder)
    {
        builder
            .AddApplicationLogging()
            .AddCustomKestrelServices()
            .AddServiceProviderValidation()
            .AddSwagger()
            .AddDatabase()
            .AddControllers()
            .AddBackgroundServices()
            .AddAuthentication()
            .AddAuthorization()
            .AddSeeders()
            .AddTimeProviderServices()
            .AddHttpResilienceServices()
            .AddRateLimitServices()
            .AddFeatures()
            .AddEvents();

        return builder;
    }
}

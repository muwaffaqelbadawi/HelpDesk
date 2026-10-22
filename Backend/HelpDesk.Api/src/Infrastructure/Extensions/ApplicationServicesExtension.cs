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
            .AddEndpoints()
            .AddSwagger()
            .AddDatabase()
            .AddRedis()
            .AddControllers()
            .AddBackgroundServices()
            .AddJwt()
            .AddUserSession()
            .AddAuthentication()
            .AddAuthorization()
            .AddTimeProvider()
            .AddHttpResilienceServices()
            .AddRateLimitServices()
            .AddSeeders()
            .AddSuperadmin()
            .AddFeatures()
            .AddEvents()
            .AddEmail()
            .AddCorsOptions()
            .AddDataImporters()
            .AddScrutor()
            .AddCommandHandlerBehavior()
            .AddQueryHandlerBehavior()
            .AddOptions();

        return builder;
    }
}

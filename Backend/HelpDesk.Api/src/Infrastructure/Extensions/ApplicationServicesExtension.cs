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
            .AddJwtOptions()
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
            .AddCommandPipeline()
            .AddApplicationOptions();

        return builder;
    }
}

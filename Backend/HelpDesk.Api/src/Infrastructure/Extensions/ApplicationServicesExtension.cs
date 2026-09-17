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
            .AddCommandPipeline()
            .AddOptions();

        return builder;
    }
}

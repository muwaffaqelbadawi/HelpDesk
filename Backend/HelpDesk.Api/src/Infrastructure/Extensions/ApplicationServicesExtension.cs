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
            .AddTimeProviderServices()
            .AddHttpResilienceServices()
            .AddRateLimitServices()
            .AddSeeders()
            .AddAdmin()
            .AddFeatures()
            .AddEvents()
            .AddEmail()
            .AddCorsOptions()
            .AddScrutorRegistration()
            .AddDataImporters();

        return builder;
    }
}

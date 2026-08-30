namespace HelpDesk.src.Infrastructure.Extensions;

public static class ApplicationServicesExtension
{
    public static WebApplicationBuilder AddApplicationServices(
        this WebApplicationBuilder builder)
    {
        var configuration = builder.Configuration;

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
            .AddTimeProviderServices()
            .AddHttpResilienceServices()
            .AddRateLimitServices()
            .AddSeeders() // Seeders
            .AddAdmin() // Admin
            .AddFeatures()
            .AddEvents()
            .AddEmail()
            .AddCorsConfiguration(configuration)
            .AddFrontendCors(configuration)
            .AddScrutorRegistration();


        //.AddCommandPipeline() // Command pipeline



        return builder;
    }
}

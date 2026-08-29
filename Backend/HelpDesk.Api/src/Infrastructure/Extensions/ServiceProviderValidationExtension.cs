namespace HelpDesk.src.Infrastructure.Extensions;

public static class ServiceProviderValidationExtension
{
    public static WebApplicationBuilder AddServiceProviderValidation(
        this WebApplicationBuilder builder)
    {
        builder.Host.UseDefaultServiceProvider(options =>
        {
            options.ValidateScopes = true;
            options.ValidateOnBuild = true;
        });

        return builder;
    }
}

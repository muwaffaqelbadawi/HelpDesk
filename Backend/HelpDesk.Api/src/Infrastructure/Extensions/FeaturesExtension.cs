namespace HelpDesk.src.Infrastructure.Extensions;

public static class FeaturesExtension
{
    public static WebApplicationBuilder AddFeatures(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddTicketServices();
        builder.Services.AddUserServices();

        return builder;
    }
}

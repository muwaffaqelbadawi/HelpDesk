namespace HelpDesk.src.Infrastructure.Extensions;

public static class EndpointsExtension
{
    public static WebApplicationBuilder AddEndpoints(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddEndpointsApiExplorer();

        return builder;
    }
}

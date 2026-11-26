using HelpDesk.Infrastructure.Extensions;

namespace HelpDesk.Infrastructure.Extensions;


public static class ControllerExtensions
{
    public static WebApplicationBuilder AddControllers(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddControllers();

        return builder;
    }
}

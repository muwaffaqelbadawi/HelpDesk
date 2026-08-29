using HelpDesk.src.Infrastructure.Extensions;

namespace HelpDesk.src.Infrastructure.Extensions;


public static class ControllerExtensions
{
    public static WebApplicationBuilder AddControllers(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddControllers();

        return builder;
    }
}

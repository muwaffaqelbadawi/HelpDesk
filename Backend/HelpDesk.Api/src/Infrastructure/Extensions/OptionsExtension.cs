using HelpDesk.src.Infrastructure.HttpContexts;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class OptionsExtension
{
    public static WebApplicationBuilder AddOptions(
        this WebApplicationBuilder builder)
    {
        // Register AddScoped service as scoped service
        builder.Services.AddScoped<IApiContext, ApiContext>();

        return builder;
    }
}

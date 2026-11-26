using HelpDesk.Infrastructure.HttpContexts;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Extensions;

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

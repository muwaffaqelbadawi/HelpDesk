using HelpDesk.src.Infrastructure.Options;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class ApplicationOptionsExtension
{
    public static WebApplicationBuilder AddApplicationOptions(
        this WebApplicationBuilder builder)
    {
        // Register ApplicationOptions service as Singleton service
        builder.Services.AddSingleton<IApplicationOptions, ApplicationOptions>();

        return builder;
    }
}

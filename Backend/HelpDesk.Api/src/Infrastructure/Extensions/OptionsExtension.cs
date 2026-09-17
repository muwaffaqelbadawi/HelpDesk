using HelpDesk.src.Infrastructure.HttpContexts;
using HelpDesk.src.Infrastructure.Options;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class OptionsExtension
{
    public static WebApplicationBuilder AddOptions(
        this WebApplicationBuilder builder)
    {
        // Register ApplicationOptions service as singleton service
        builder.Services.AddSingleton<IApplicationOptions, ApplicationOptions>();

        // Register AddScoped service as scoped service
        builder.Services.AddScoped<IApiContext, ApiContext>();

        // Register PasswordResetOptions service as singleton service
        builder.Services.AddSingleton<IPasswordResetOptions, PasswordResetOptions>();

        return builder;
    }
}

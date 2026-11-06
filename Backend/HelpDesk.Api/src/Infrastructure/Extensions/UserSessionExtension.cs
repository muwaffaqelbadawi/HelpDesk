using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.DataAccess.Readers;
using HelpDesk.src.Shared.DataAccess.Repositories;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class UserSessionExtension
{
    public static WebApplicationBuilder AddUserSessionConfigs(
       this WebApplicationBuilder builder)
    {
        var userSessionSection = builder.Configuration.GetSection("UserSession");

        builder.Services
            .AddOptions<UserSessionOptions>()
            .Bind(userSessionSection)
            .ValidateOnStart();

        return builder;
    }

    public static WebApplicationBuilder AddUserSessionServices(
       this WebApplicationBuilder builder)
    {
        // Register UserSessionReader as scoped service
        builder.Services.AddScoped<IUserSessionReader, UserSessionReader>();

        // Register UserSessionRepository as scoped service
        builder.Services.AddScoped<IUserSessionRepository, UserSessionRepository>();

        // Register UserSessionService as scoped service
        builder.Services.AddScoped<IUserSessionService, UserSessionService>();

        return builder;
    }

    public static WebApplicationBuilder AddUserSession(
       this WebApplicationBuilder builder)
    {
        builder
            .AddUserSessionConfigs()
            .AddUserSessionServices();

        return builder;
    }
}

using HelpDesk.src.Infrastructure.Services.UserSession;

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
}

using HelpDesk.src.Infrastructure.Services.Time;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class TimeProviderServicesExtension
{
    public static WebApplicationBuilder AddTimeProviderServices(
        this WebApplicationBuilder builder)
    {
        // Register TimeProvider as Singleton
        builder.Services.AddSingleton(TimeProvider.System);

        // Register DateTimeService as Singleton
        builder.Services.AddSingleton<IDateTimeService, DateTimeService>();

        return builder;
    }

}

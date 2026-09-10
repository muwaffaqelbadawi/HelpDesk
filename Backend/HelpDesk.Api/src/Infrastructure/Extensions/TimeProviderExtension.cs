using HelpDesk.src.Infrastructure.Services.Time;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class TimeProviderExtension
{
    public static WebApplicationBuilder AddTimeProvider(
        this WebApplicationBuilder builder)
    {
        // Register TimeProvider as Singleton service
        builder.Services.AddSingleton(TimeProvider.System);

        // Register DateTimeService as Singleton service
        builder.Services.AddSingleton<IDateTimeService, DateTimeService>();

        return builder;
    }
}

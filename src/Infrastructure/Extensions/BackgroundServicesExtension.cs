using HelpDesk.src.Infrastructure.Services.BackgroundJobs;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class BackgroundServicesExtension
{
    public static WebApplicationBuilder AddBackgroundServices(
        this WebApplicationBuilder builder)
    {
        // Register BackgroundTaskQueue service as Singleton
        builder.Services.AddSingleton<IBackgroundTaskQueue, BackgroundTaskQueue>();

        // Register QueuedHostedService as HostedService
        builder.Services.AddHostedService<QueuedHostedService>();

        return builder;
    }
}

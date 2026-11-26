using HelpDesk.Infrastructure.Services.BackgroundJobs;

namespace HelpDesk.Shared.Interfaces;

public interface IBackgroundTaskQueue
{
    Task QueueBackgroundWorkItemAsync(
        BackgroundWorkItem workItem,
        CancellationToken cancellationToken = default);

    Task<BackgroundWorkItem> DequeueAsync(
        CancellationToken cancellationToken);
}
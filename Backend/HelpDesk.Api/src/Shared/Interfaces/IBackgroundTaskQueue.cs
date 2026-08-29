using HelpDesk.src.Infrastructure.Services.BackgroundJobs;

namespace HelpDesk.src.Shared.Interfaces;

public interface IBackgroundTaskQueue
{
    Task QueueBackgroundWorkItemAsync(
        BackgroundWorkItem workItem,
        CancellationToken cancellationToken = default);

    Task<BackgroundWorkItem> DequeueAsync(
        CancellationToken cancellationToken);
}
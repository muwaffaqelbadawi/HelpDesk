using System.Threading.Channels;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.BackgroundJobs;

public sealed class BackgroundTaskQueue : IBackgroundTaskQueue
{
    private readonly Channel<BackgroundWorkItem> _queue;

    public BackgroundTaskQueue(int capacity = 100)
    {
        ArgumentOutOfRangeException.ThrowIfNegativeOrZero(capacity);

        var options = new BoundedChannelOptions(capacity)
        {
            FullMode = BoundedChannelFullMode.Wait,
            SingleReader = true,
            SingleWriter = false
        };

        _queue = Channel.CreateBounded<BackgroundWorkItem>(options);
    }

    public async Task QueueBackgroundWorkItemAsync(
        BackgroundWorkItem workItem,
        CancellationToken cancellationToken)
    {
        // QueueBackgroundWorkItem() receives a BackgroundWorkItem
        // from the producer and writes it into the channel.

        ArgumentNullException.ThrowIfNull(workItem);

        await _queue.Writer.WriteAsync(workItem, cancellationToken);
    }

    public async Task<BackgroundWorkItem> DequeueAsync(
        CancellationToken cancellationToken)
    {
        // DequeueAsync() reads a BackgroundWorkItem
        // from the channel and returns it to the consumer.

        return await _queue.Reader.ReadAsync(cancellationToken);
    }
}

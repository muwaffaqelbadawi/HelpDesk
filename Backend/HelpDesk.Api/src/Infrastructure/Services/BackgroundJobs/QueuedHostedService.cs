using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.BackgroundJobs;

public sealed class QueuedHostedService : BackgroundService
{
    private readonly IBackgroundTaskQueue _taskQueue;
    private readonly IServiceScopeFactory _scopeFactory;
    private readonly ILogger<QueuedHostedService> _logger;

    public QueuedHostedService(
        IBackgroundTaskQueue taskQueue,
        IServiceScopeFactory scopeFactory,
        ILogger<QueuedHostedService> logger)
    {
        _taskQueue = taskQueue;
        _scopeFactory = scopeFactory;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation("Queued Hosted Service is running.");

        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                _logger.LogTrace("Waiting for background work item...");

                _logger.LogDebug("Waiting for background work item.");

                var workItem = await _taskQueue.DequeueAsync(stoppingToken);

                _logger.LogDebug("Executing background work item.");

                using var scope = _scopeFactory.CreateScope();

                await workItem(scope.ServiceProvider, stoppingToken);

                _logger.LogDebug("Background work item completed.");
            }
            catch (OperationCanceledException)
                when (stoppingToken.IsCancellationRequested)
            {
                break;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex,
                    "Error occurred executing background work item.");
            }
        }
    }

    public override async Task StopAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("Queued Hosted Service stopping.");

        await base.StopAsync(cancellationToken);

        _logger.LogInformation("Queued Hosted Service stopped.");
    }
}

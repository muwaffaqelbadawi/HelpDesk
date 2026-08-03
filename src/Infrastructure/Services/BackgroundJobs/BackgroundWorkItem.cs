namespace HelpDesk.src.Infrastructure.Services.BackgroundJobs;

public delegate Task BackgroundWorkItem(
    IServiceProvider services,
    CancellationToken cancellationToken);

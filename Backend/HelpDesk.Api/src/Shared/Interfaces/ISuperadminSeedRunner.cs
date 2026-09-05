namespace HelpDesk.src.Shared.Interfaces;

public interface ISuperadminSeedRunner
{
    Task BootstrapAsync(
        CancellationToken cancellationToken);
}

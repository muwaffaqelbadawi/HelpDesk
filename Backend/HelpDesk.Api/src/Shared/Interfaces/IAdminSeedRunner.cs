namespace HelpDesk.src.Shared.Interfaces;

public interface IAdminSeedRunner
{
    Task BootstrapAsync(
        CancellationToken cancellationToken);
}

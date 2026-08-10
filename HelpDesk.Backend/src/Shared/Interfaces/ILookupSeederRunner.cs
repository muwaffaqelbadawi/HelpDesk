namespace HelpDesk.src.Shared.Interfaces;

public interface ILookupSeederRunner
{
    Task SeedAsync(
        CancellationToken cancellationToken);
}

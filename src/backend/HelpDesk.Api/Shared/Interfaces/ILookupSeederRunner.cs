namespace HelpDesk.Shared.Interfaces;

public interface ILookupSeederRunner
{
    Task SeedAsync(CancellationToken cancellationToken = default);
}

namespace HelpDesk.src.Shared.Interfaces;

public interface ISectorRules
{
    Task<bool> IsActiveAsync(
        Guid sectorId,
        CancellationToken cancellationToken);
}

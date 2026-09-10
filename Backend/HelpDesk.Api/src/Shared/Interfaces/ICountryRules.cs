namespace HelpDesk.src.Shared.Interfaces;

public interface ICountryRules
{
    Task<bool> IsActiveAsync(
        Guid countryId,
        CancellationToken cancellationToken);
}

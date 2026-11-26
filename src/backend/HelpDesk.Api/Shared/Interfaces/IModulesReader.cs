namespace HelpDesk.Shared.Interfaces;

public interface IModulesReader
{
    Task<IReadOnlyCollection<string>> GetUserModulesAsync(
        Guid userId,
        CancellationToken cancellationToken);
}

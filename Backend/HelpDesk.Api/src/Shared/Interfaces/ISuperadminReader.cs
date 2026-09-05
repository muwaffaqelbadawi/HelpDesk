using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Interfaces;

public interface ISuperadminReader
{
    Task<SuperadminAccountData> GetSuperadminAsync(
        Guid userId,
        CancellationToken cancellationToken);
}

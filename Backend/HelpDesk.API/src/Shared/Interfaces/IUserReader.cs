using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserReader
{
    Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken);
}

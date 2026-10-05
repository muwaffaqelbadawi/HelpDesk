using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.QueryParameters;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserReader
{
    Task<PagedResult<UserAccountData>> GetAllAsync(
        GetUsersParameters query,
        CancellationToken cancellationToken = default);

    Task<IReadOnlyList<UserAccountData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken = default);

    Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken = default);

    Task<UserAccountRowVersionData> GetNewRowAsync(
        Guid userId,
        CancellationToken cancellationToken = default);

    Task<bool> IsEmployee(
        Guid userId,
        CancellationToken cancellationToken = default);
}

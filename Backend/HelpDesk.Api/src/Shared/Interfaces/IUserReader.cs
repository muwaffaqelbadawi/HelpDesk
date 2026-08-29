using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserReader
{
    // Pagination logic
    Task<PagedResult<UserAccountData>> GetAllAsync(
        GetUsersQuery query,
        CancellationToken cancellationToken = default);

    // Search logic
    Task<IReadOnlyList<UserAccountData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken = default);

    // Select logic
    Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken = default);
}

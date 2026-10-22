using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Users.GetAll;

public sealed class GetUsersAccountHandler(IUserReader userReader) :
    IQueryHandler<QueryParameters, PagedResult<UserAccountData>>
{
    public async Task<PagedResult<UserAccountData>> HandleAsync(
        QueryParameters query,
        CancellationToken cancellationToken)
    {
        return await userReader.GetAllAsync(query, cancellationToken);
    }
}

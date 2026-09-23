using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Users.UserAccount.Admin.GetAll;

public sealed class GetUsersAccountHandler(IUserReader userReader) :
    IQueryHandler<GetUsersQuery, PagedResult<UserAccountData>>
{
    public async Task<PagedResult<UserAccountData>> HandleAsync(
        GetUsersQuery query,
        CancellationToken cancellationToken)
    {
        return await userReader.GetAllAsync(query, cancellationToken);
    }
}

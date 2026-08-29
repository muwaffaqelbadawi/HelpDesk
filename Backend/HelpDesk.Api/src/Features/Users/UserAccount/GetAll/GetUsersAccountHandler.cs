using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Users.UserAccount.GetAll;

public sealed class GetUsersAccountHandler :
    IQueryHandler<GetUsersQuery, PagedResult<UserAccountData>>
{
    private readonly IUserReader _userReader;

    public GetUsersAccountHandler(
        IUserReader userRepository)
    {
        _userReader = userRepository;
    }

    public async Task<PagedResult<UserAccountData>> HandleAsync(
        GetUsersQuery query,
        CancellationToken cancellationToken)
    {
        return await _userReader.GetAllAsync(query, cancellationToken);
    }
}

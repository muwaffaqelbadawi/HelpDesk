using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.src.Features.Users.GetAll;

public sealed class GetAllUsersAccountHandler(IUserReader userReader)
    : IQueryHandler<QueryParameters, GetAllUsersResponse>
{
    public async Task<GetAllUsersResponse> HandleAsync(
        QueryParameters query,
        CancellationToken cancellationToken)
    {
        var pagedResult = await userReader
            .GetAllAsync(
                query,
                cancellationToken);

        return new GetAllUsersResponse(pagedResult);
    }
}

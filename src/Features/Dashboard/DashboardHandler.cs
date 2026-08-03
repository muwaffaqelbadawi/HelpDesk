using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.src.Features.Dashboard;

public sealed class DashboardHandler :
    IQueryHandler<PagedQuery, PagedResult<DashboardResponse>>
{
    public Task<PagedResult<DashboardResponse>> HandleAsync(
        PagedQuery query,
        CancellationToken cancellationToken)
    {



        throw new NotImplementedException();
    }
}

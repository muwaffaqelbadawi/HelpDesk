using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Roles.GetById;

public sealed class GetRoleByIdHandler
    : IQueryHandler<GetByIdRoleQuery, GetByIdRoleResponse>
{
    public Task<GetByIdRoleResponse> HandleAsync(
        GetByIdRoleQuery query,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}

using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Employees.GetById;

public sealed class GetByIdEmployeeHandler
    : IQueryHandler<GetByIdEmployeeQuery, GetByIdEmployeeResponse>
{
    public Task<GetByIdEmployeeResponse> HandleAsync(
        GetByIdEmployeeQuery query,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}

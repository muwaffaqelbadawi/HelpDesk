using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Employees.Update;

public sealed class UpdateEmployeeHandler :
    ICommandHandler<UpdateEmployeeCommand, UpdateEmployeeResponse>
{
    public UpdateEmployeeHandler()
    {

    }

    public Task<UpdateEmployeeResponse> HandleAsync(
        UpdateEmployeeCommand command,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}

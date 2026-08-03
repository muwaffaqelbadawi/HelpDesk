using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Roles.Update;

public sealed class UpdateRoleHandler
    : ICommandHandler<UpdateRoleCommand, UpdateRoleResponse>
{
    public Task<UpdateRoleResponse> HandleAsync(
        UpdateRoleCommand command,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}

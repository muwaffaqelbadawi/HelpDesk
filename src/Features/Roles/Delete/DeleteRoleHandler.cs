using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Roles.Delete;

public sealed class DeleteRoleHandler
    : ICommandHandler<DeleteRoleCommand, DeleteRoleResponse>
{
    public Task<DeleteRoleResponse> HandleAsync(
        DeleteRoleCommand command,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}

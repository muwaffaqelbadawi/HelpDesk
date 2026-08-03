namespace HelpDesk.src.Features.Roles.Assign;

public interface IAssignRoleHandler
{
    Task<AssignRoleResponse> HandleAsync(
        AssignRoleCommand request,
        CancellationToken cancellationToken = default);
}
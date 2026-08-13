namespace HelpDesk.src.Features.Roles.Assign;

public sealed record AssignRoleCommand(
    Guid UserId,
    Guid RoleId);

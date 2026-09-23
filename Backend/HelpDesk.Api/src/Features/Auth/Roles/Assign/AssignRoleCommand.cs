namespace HelpDesk.src.Features.Auth.Roles.Assign;

public sealed record AssignRoleCommand(
    Guid UserId,
    Guid RoleId);

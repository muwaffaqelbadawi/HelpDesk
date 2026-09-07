namespace HelpDesk.src.Features.Users.UserRoles.Assign;

public sealed record AssignRoleCommand(
    Guid UserId,
    Guid RoleId);

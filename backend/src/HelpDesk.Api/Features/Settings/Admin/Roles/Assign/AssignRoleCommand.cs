namespace HelpDesk.Features.Settings.Admin.Roles.Assign;

public sealed record AssignRoleCommand(
    Guid UserId,
    Guid RoleId);

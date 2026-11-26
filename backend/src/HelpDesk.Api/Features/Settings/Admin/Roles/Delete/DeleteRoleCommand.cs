namespace HelpDesk.Features.Settings.Admin.Roles.Delete;

public sealed record DeleteRoleCommand(
    Guid UserId,
    Guid RoleId);

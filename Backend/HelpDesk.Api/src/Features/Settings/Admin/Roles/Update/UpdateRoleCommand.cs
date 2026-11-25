namespace HelpDesk.src.Features.Settings.Admin.Roles.Update;

public sealed record UpdateRoleCommand(
    Guid UserId,
    Guid RoleId);

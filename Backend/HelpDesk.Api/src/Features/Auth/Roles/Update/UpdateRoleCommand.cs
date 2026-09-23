namespace HelpDesk.src.Features.Auth.Roles.Update;

public sealed record UpdateRoleCommand(
    Guid UserId,
    Guid RoleId);

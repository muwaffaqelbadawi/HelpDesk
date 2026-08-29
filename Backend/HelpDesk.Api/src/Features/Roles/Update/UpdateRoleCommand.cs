namespace HelpDesk.src.Features.Roles.Update;

public sealed record UpdateRoleCommand(
    Guid UserId,
    Guid RoleId);

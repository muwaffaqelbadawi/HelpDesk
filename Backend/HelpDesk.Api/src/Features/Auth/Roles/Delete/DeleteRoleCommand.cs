namespace HelpDesk.src.Features.Auth.Roles.Delete;

public sealed record DeleteRoleCommand(
    Guid UserId,
    Guid RoleId);

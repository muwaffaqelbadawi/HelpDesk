namespace HelpDesk.src.Features.Users.UserRoles.Update;

public sealed record UpdateRoleCommand(
    Guid UserId,
    Guid RoleId);

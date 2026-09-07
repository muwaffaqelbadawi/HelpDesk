namespace HelpDesk.src.Features.Users.UserRoles.Delete;

public sealed record class DeleteRoleCommand(
    Guid UserId,
    Guid RoleId);

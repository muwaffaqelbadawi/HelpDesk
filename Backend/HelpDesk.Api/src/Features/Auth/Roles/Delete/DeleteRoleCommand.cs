namespace HelpDesk.src.Features.Auth.Roles.Delete;

public sealed record class DeleteRoleCommand(
    Guid UserId,
    Guid RoleId);

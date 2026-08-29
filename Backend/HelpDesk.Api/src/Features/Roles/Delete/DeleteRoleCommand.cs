namespace HelpDesk.src.Features.Roles.Delete;

public sealed record class DeleteRoleCommand(
    Guid UserId,
    Guid RoleId);

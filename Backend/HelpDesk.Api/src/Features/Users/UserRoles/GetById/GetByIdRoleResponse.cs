namespace HelpDesk.src.Features.Users.UserRoles.GetById;

public sealed record GetByIdRoleResponse(
    Guid RoleId,
    string RoleName);

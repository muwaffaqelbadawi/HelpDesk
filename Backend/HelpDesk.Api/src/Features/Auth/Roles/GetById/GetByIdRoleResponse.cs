namespace HelpDesk.src.Features.Auth.Roles.GetById;

public sealed record GetByIdRoleResponse(
    Guid RoleId,
    string RoleName);

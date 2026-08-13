namespace HelpDesk.src.Features.Roles.GetById;

public sealed record GetByIdRoleResponse(
    Guid RoleId,
    string RoleName);

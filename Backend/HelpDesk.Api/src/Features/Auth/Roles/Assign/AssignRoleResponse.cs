using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Auth.Roles.Assign;

public sealed record AssignRoleResponse(
    UserAccountData UserAccountData);
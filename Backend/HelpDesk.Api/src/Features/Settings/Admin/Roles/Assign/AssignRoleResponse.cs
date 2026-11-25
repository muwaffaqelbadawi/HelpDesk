using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Settings.Admin.Roles.Assign;

public sealed record AssignRoleResponse(
    UserAccountData UserAccountData);
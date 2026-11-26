using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Settings.Admin.Roles.Assign;

public sealed record AssignRoleResponse(
    UserAccountData UserAccountData);
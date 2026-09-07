using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Users.UserRoles.GetAll;

public sealed record class RolesResponse(
    IReadOnlyCollection<RoleData> Roles);

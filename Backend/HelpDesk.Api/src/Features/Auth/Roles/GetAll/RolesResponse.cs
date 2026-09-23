using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Auth.Roles.GetAll;

public sealed record class RolesResponse(
    IReadOnlyCollection<RoleData> Roles);

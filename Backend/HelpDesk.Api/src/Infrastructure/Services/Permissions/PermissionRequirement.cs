using Microsoft.AspNetCore.Authorization;

namespace HelpDesk.src.Infrastructure.Services.Permissions;

public sealed class PermissionRequirement(string permission)
    : IAuthorizationRequirement
{
    public string Permission { get; } = permission;
}

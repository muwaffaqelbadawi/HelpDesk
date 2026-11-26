using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.SystemAccounts.Superadmin;

public sealed record SuperadminCommand(
    string UserName,
    string Email,
    Guid RoleId) : ISystemCommand;
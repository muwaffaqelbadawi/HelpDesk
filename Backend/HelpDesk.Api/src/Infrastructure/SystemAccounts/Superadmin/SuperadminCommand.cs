namespace HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;

public sealed record SuperadminCommand(
    string UserName,
    string Email,
    Guid RoleId);
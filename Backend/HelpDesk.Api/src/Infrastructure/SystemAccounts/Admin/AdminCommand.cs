namespace HelpDesk.src.Infrastructure.SystemAccounts.Admin;

public sealed record AdminCommand(
    string UserName,
    string Email,
    Guid RoleId);
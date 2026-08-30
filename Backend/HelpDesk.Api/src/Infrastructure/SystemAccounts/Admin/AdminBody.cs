namespace HelpDesk.src.Infrastructure.SystemAccounts.Admin;

public sealed record AdminBody(
    string UserName = "superadmin",
    string Email = "superadmin@test.com",
    string RoleName = "SuperAdmin");

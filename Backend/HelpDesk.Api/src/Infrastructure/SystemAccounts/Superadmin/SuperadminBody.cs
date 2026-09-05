namespace HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;

public sealed record SuperadminBody(
    string UserName = "superadmin",
    string Email = "superadmin@test.com",
    string RoleName = "SuperAdmin");

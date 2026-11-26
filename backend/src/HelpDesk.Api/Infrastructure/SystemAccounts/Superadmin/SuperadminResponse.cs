using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Infrastructure.SystemAccounts.Superadmin;

public sealed record SuperadminResponse(
    SuperadminAccountData SuperadminData);
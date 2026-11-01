using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;

public sealed record SuperadminResponse(
    SuperadminAccountData SuperadminData);
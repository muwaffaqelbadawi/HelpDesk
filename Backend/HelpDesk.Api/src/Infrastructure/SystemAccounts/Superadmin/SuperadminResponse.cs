using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;

public sealed record SuperadminResponse(
    SuperadminAccountData SuperadminData);
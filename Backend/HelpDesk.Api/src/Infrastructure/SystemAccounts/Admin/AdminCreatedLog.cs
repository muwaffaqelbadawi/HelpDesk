using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Infrastructure.SystemAccounts.Admin;

public sealed record AdminCreatedLog(
    string Event,
    AdminData AdminData,
    IReadOnlyCollection<string> Roles,
    string TempPassword);

using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Admin;

public sealed record AdminCreatedLog(
    string Event,
    AdminData AdminData,
    IReadOnlyCollection<string> Roles,
    string TempPassword);

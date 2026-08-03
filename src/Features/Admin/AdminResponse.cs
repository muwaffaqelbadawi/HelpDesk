using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Admin;

public sealed record AdminResponse(
    AdminData AdminData,
    string TempPassword);
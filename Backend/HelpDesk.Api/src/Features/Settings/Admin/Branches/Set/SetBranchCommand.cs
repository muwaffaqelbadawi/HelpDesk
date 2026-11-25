namespace HelpDesk.src.Features.Settings.Admin.Branches.Set;

public sealed record SetBranchCommand(
    Guid UserId,
    Guid BranchId);

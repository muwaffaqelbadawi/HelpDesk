namespace HelpDesk.src.Features.Users.UpdateUserProfile;

public sealed record UpdateUseProfilerCommand(
    string? FullEnName,
    string? FullArName,
    string? UserName,
    string? Email,
    byte[] ExpectedRowVersion);

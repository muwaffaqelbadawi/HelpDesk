namespace HelpDesk.src.Features.Users.UpdateUserProfile;

public sealed record UpdateUserProfileBody(
    string? FullEnName,
    string? FullArName,
    string? UserName,
    string? Email,
    byte[] ExpectedRowVersion);

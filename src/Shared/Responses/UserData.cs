namespace HelpDesk.src.Shared.Responses;

public sealed record UserData(
    Guid UserId,
    string UserName,
    string Email,
    string? FullEnName,
    string? FullArName,
    byte[]? EmployeeRowVersion);

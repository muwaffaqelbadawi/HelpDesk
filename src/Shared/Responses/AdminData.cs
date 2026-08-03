namespace HelpDesk.src.Shared.Responses;

public sealed record AdminData(
    Guid UserId,
    string UserName,
    string Email);

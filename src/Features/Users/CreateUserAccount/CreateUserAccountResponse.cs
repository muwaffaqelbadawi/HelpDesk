namespace HelpDesk.src.Features.Users.CreateUserAccount;

public sealed record CreateUserAccountResponse(
    Guid Id,
    string FullEnName,
    string UserName,
    string Email,
    string Password,
    DateTimeOffset CreatedAt);
namespace HelpDesk.Features.Users.Create;

public sealed record CreateUserAccountBody(
    string UserName,
    string Email,
    string FullEnName,
    string FullArName);
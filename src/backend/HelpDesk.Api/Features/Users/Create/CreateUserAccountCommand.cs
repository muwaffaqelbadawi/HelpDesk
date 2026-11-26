namespace HelpDesk.Features.Users.Create;

public sealed record CreateUserAccountCommand(
    string UserName,
    string Email,
    string FullEnName,
    string FullArName);

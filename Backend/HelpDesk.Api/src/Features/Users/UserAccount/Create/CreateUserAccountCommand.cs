namespace HelpDesk.src.Features.Users.UserAccount.Create;

public sealed record class CreateUserAccountCommand(
    string UserName,
    string Email,
    string FullEnName,
    string FullArName);

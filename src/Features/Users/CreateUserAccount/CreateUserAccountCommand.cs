namespace HelpDesk.src.Features.Users.CreateUserAccount;

public sealed record class CreateUserAccountCommand(
    string UserName,
    string Email,
    string FullEnName,
    string FullArName);

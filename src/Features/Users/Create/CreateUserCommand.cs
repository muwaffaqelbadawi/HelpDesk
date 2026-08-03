namespace HelpDesk.src.Features.Users.Create;

public sealed record CreateUserCommand(
    string UserName,
    string Email);

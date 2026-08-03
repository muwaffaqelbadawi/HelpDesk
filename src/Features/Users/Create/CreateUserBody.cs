namespace HelpDesk.src.Features.Users.Create;

public sealed record CreateUserBody(
    string UserName,
    string Email);

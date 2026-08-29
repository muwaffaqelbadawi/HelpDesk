namespace HelpDesk.src.Features.Auth.Login;

public sealed record LoginCommand(
    string Identity,
    string Password);
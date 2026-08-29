namespace HelpDesk.src.Features.Auth.Login;

public sealed record LoginBody(
    string Identity,
    string Password);

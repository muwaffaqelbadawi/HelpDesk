namespace HelpDesk.src.Features.Auth.Login;

public sealed record LoginBody(
    string Username,
    string Password,
    bool StaySignedIn);

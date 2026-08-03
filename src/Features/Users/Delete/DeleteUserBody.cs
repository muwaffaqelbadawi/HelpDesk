namespace HelpDesk.src.Features.Users.Delete;

public sealed record DeleteUserBody(
    byte[] ExpectedRowVersion);

namespace HelpDesk.src.Features.Users.Delete;

public sealed record DeleteUserCommand(
    Guid UserId,
    byte[] ExpectedRowVersion);

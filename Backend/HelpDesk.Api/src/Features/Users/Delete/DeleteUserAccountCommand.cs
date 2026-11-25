namespace HelpDesk.src.Features.Users.Delete;

public sealed record DeleteUserAccountCommand(
    Guid UserId,
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

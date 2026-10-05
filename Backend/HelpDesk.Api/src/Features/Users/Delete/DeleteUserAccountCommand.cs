namespace HelpDesk.src.Features.Users.Delete;

public sealed record class DeleteUserAccountCommand(
    Guid UserId,
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

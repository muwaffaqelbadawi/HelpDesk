namespace HelpDesk.src.Features.Users.UserAccount.Delete;

public sealed record class DeleteUserAccountCommand(
    Guid UserId,
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

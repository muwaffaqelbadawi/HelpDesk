namespace HelpDesk.src.Features.Users.UserAccount.Admin.Delete;

public sealed record class DeleteUserAccountCommand(
    Guid UserId,
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

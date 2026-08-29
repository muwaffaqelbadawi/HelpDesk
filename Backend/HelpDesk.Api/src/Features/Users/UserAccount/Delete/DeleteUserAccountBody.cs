namespace HelpDesk.src.Features.Users.UserAccount.Delete;

public sealed record DeleteUserAccountBody(
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

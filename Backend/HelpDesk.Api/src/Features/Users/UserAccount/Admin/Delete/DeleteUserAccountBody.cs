namespace HelpDesk.src.Features.Users.UserAccount.Admin.Delete;

public sealed record DeleteUserAccountBody(
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

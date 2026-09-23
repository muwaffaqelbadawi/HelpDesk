namespace HelpDesk.src.Features.Users.UserAccount.Admin.Update;

public sealed record UpdateUserAccountResponse(
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

namespace HelpDesk.src.Features.Users.UserAccount.Update;

public sealed record UpdateUserAccountResponse(
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

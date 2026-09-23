namespace HelpDesk.src.Features.Users.UserAccount.Admin.Update;

public sealed record UpdateUserAccountBody(
    string UserName,
    string Email,
    string FullEnName,
    string FullArName,
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

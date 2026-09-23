namespace HelpDesk.src.Features.Users.UserAccount.User.UpdateCurrent;

public sealed record UpdateCurrentUserAccountBody(
    string FullEnName,
    string FullArName,
    string UserName,
    string Email,
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

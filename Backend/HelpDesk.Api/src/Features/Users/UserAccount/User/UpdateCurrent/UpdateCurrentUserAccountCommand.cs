namespace HelpDesk.src.Features.Users.UserAccount.User.UpdateCurrent;

public sealed record UpdateCurrentUserAccountCommand(
    string UserName,
    string Email,
    string FullEnName,
    string FullArName,
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

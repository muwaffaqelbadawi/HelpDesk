namespace HelpDesk.src.Features.Users.UserAccount.UpdateCurrent;

public sealed record UpdateCurrentUserAccountCommand(
    string UserName,
    string Email,
    string FullEnName,
    string FullArName,
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

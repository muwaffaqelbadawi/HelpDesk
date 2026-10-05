namespace HelpDesk.src.Features.Users.UpdateMy;

public sealed record UpdateMyUserAccountCommand(
    string UserName,
    string Email,
    string FullEnName,
    string FullArName,
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

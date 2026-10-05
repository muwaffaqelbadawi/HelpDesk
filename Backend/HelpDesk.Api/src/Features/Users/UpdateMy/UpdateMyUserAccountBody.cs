namespace HelpDesk.src.Features.Users.UpdateMy;

public sealed record UpdateMyUserAccountBody(
    string FullEnName,
    string FullArName,
    string UserName,
    string Email,
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

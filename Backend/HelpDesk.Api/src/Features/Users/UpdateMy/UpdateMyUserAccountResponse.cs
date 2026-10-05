namespace HelpDesk.src.Features.Users.UpdateMy;

public sealed record UpdateMyUserAccountResponse(
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

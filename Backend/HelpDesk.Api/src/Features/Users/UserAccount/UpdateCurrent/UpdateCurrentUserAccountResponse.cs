namespace HelpDesk.src.Features.Users.UserAccount.UpdateCurrent;

public sealed record UpdateCurrentUserAccountResponse(
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

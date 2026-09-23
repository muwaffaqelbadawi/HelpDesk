namespace HelpDesk.src.Features.Users.UserAccount.User.UpdateCurrent;

public sealed record UpdateCurrentUserAccountResponse(
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

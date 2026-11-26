namespace HelpDesk.Features.Users.Update;

public sealed record UpdateUserAccountResponse(
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

namespace HelpDesk.src.Features.Users.Delete;

public sealed record DeleteUserAccountBody(
    byte[] UserRowVersion,
    byte[] EmployeeRowVersion);

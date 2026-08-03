namespace HelpDesk.src.Shared.Responses;

public sealed record class EmployeeData(
    Guid EmployeeId,
    string FullEnName,
    string FullArName,
    string EmployeeNumber,
    byte[] RowVersion);

namespace HelpDesk.src.Features.Employees.Delete;

public sealed record DeleteEmployeeCommand(
    Guid EmployeeId,
    byte[] EmployeeRowVersion);

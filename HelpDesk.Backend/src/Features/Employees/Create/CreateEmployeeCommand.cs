namespace HelpDesk.src.Features.Employees.Create;

public sealed record CreateEmployeeCommand(
    string FullEnName,
    string FullArName);
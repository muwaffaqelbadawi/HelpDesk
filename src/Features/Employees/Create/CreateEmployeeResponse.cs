namespace HelpDesk.src.Features.Employees.Create;

public sealed record CreateEmployeeResponse(
    string Message,
    DateTimeOffset CreatedAt);
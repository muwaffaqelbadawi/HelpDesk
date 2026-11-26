namespace HelpDesk.Features.Settings.Admin.Departments.Set;

public sealed record SetDepartmentCommand(
    Guid UserId,
    Guid DepartmentId);

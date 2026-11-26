using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Settings.Admin.Departments.Get;

public sealed record GetAllDepartmentsResponse(
    IReadOnlyCollection<SeedData> Departments);

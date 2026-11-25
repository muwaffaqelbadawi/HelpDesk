using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Settings.Admin.Departments.Get;

public sealed record GetAllDepartmentsResponse(
    IReadOnlyCollection<SeedData> Departments);

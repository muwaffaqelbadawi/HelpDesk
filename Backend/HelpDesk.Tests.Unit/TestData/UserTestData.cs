using HelpDesk.src.Features.Users.Create;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Departments;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Sectors;

namespace HelpDesk.Tests.Unit.TestData;

public static class UserTestData
{
    public static CreateUserAccountCommand CreateUserCommand(Guid countryId)
    {
        var uniqueId = Guid.NewGuid().ToString("N")[..10];

        return new CreateUserAccountCommand(
            UserName: $"testuser-{uniqueId}",
            Email: $"testuser-{uniqueId}@example.com",
            PhoneNumber: "+966112345678",
            FullEnName: $"Test User {uniqueId}",
            FullArName: $"مستخدم اختبار {uniqueId}",
            JobTitle: $"Software Engineer {uniqueId}",
            DepartmentId: DepartmentsIds.InformationTechnology,
            SectorId: SectorsIds.Technology,
            CountryId: countryId);
    }
}

using HelpDesk.src.Features.Users.UserAccount.Create;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Departments;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Sectors;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.Tests.Integration.Fixtures;
using HelpDesk.Tests.Integration.TestDoubles;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PhoneNumbers;
using Xunit;

namespace HelpDesk.Tests.Integration.Features.Users.UserAccount.Create;

public sealed class CreateUserAccountTests(HelpDeskApplicationFactory factory)
    : IClassFixture<HelpDeskApplicationFactory>
{
    [Fact]
    public async Task Should_create_user_account()
    {
        // Arrange

        await using var scope =
            factory.Services.CreateAsyncScope();

        // Handler
        var handler = scope.ServiceProvider
            .GetRequiredService<
                ICommandHandler<CreateUserAccountCommand,
                CreateUserAccountResponse>>();

        // db
        var db = scope.ServiceProvider
            .GetRequiredService<AppDbContext>();

        // Query country ID
        var countryId = await db.Countries
            .Where(x => x.Alpha2Code == "SA")
            .Select(x => x.Id)
            .SingleAsync(CancellationToken.None);

        // Phone number
        var phoneUtil = PhoneNumberUtil.GetInstance();
        var number = phoneUtil.GetExampleNumber("SA");
        var phone = phoneUtil.Format(
            number,
            PhoneNumberFormat.E164);

        // Test user context
        var testUserContext = scope.ServiceProvider
            .GetRequiredService<TestUserContext>();

        // Query superadmin ID
        var superAdminId = await db.Users
            .Where(x => x.UserName == "superadmin")
            .Select(x => x.Id)
            .SingleAsync(CancellationToken.None);

        // Set superadmin ID
        testUserContext.GuidUserId = superAdminId;

        // command
        var command = new CreateUserAccountCommand(
            UserName: "johndo",
            Email: "johndo@example.com",
            PhoneNumber: phone,
            FullEnName: "John Do",
            FullArName: "جون دو",
            JobTitle: "Software engineer",
            DepartmentId: DepartmentsIds.InformationTechnology,
            SectorId: SectorsIds.Technology,
            CountryId: countryId);

        // Act
        await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        var user = await db.Users
            .SingleAsync(
                x => x.UserName == command.UserName,
                CancellationToken.None);

        var employee = await db.Employees
            .SingleAsync(
                x => x.UserId == user.Id,
                CancellationToken.None);

        Assert.Equal(command.UserName, user.UserName);
        Assert.Equal(command.Email, user.Email);
        Assert.Equal(command.PhoneNumber, user.PhoneNumber);
        Assert.Equal(command.FullEnName, employee.FullEnName);
        Assert.Equal(command.FullArName, employee.FullArName);
        Assert.Equal(command.JobTitle, employee.JobTitle);
        Assert.Equal(command.DepartmentId, employee.DepartmentId);
        Assert.Equal(command.SectorId, employee.SectorId);
        Assert.Equal(command.CountryId, employee.CountryId);
    }
}

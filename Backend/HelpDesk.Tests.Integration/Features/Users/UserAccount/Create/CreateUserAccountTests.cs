using HelpDesk.src.Features.Users.Create;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.Tests.Integration.Fixtures;
using HelpDesk.Tests.Integration.TestData;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
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

        // Allow superadmin access
        var superadmin = await db.Users
            .SingleAsync(
                x => x.NormalizedUserName == "SUPERADMIN",
                CancellationToken.None);

        superadmin.MustResetPassword = false;

        await db.SaveChangesAsync(CancellationToken.None);

        // Query country ID
        var countryId = await db.Countries
            .Where(x => x.Alpha2Code == "SA")
            .Select(x => x.Id)
            .SingleAsync(CancellationToken.None);

        // Test user context
        var testUserContext = scope.ServiceProvider
            .GetRequiredService<UserContextTestData>();

        // Query superadmin ID
        var superAdminId = await db.Users
            .Where(x => x.UserName == "superadmin")
            .Select(x => x.Id)
            .SingleAsync(CancellationToken.None);

        // Set superadmin ID
        testUserContext.GuidUserId = superAdminId;

        // command (Only enter the countryId everything else is automated!)
        var command = UserTestData.CreateUserCommand(countryId);

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

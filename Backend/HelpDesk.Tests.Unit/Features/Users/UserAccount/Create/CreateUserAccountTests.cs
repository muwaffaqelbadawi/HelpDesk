using HelpDesk.src.Features.Users.UserAccount.Create;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.src.Infrastructure.Services.SQLServerSequence;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.Extensions.Logging;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.UserAccount.Create;

public sealed class CreateUserAccountTests
{
    [Fact]
    public async Task Should_create_user_account()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var userContext = Substitute.For<IUserContext>();
        var userRepository = Substitute.For<IUserRepository>();
        var userReader = Substitute.For<IUserReader>();
        var passwordGenerator = Substitute.For<ITemporaryPasswordGenerator>();
        var numberingService = Substitute.For<INumberingService>();
        var dateTimeService = Substitute.For<IDateTimeService>();
        var queueEmailService = Substitute.For<IQueueEmailService>();
        var logger = Substitute.For<ILogger<CreateUserAccountHandler>>();


        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new CreateUserAccountHandler(
            userContext,
            userRepository,
            userReader,
            passwordGenerator,
            numberingService,
            dateTimeService,
            queueEmailService,
            logger);

        // Mock user context to return a specific user admin ID
        var currentUserId = Guid.NewGuid();
        userContext.GuidUserId.Returns(currentUserId);

        // Mock numbering service to return a specific employee number
        var employeeNumber = "EMP-000001";
        numberingService.GetNextNumberAsync(
                NumberType.Employee,
                Arg.Any<CancellationToken>())
            .Returns(employeeNumber);

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset(
            2026, 8, 13, 14, 30, 0,
            TimeSpan.Zero);
        dateTimeService.UtcNow.Returns(now);

        // Create a command with user account details
        var command = new CreateUserAccountCommand(
            UserName: "johndoe",
            Email: "johndoe@example.com",
            FullEnName: "John Doe",
            FullArName: "جون دو");

        // Variable to capture the created employee and user
        Employee? createdEmployee = null;
        ApplicationUser? createdUser = null;

        // Mock user repository to capture the user being added
        userRepository
            .When(x => x.AddAsync(
                Arg.Any<ApplicationUser>(),
                Arg.Any<Employee>(),
                Arg.Any<string>(),
                Arg.Any<CancellationToken>()))
            .Do(callInfo =>
            {
                createdEmployee = callInfo.Arg<Employee>();
                createdUser = callInfo.Arg<ApplicationUser>();
            });

        // Prepare expected user account data for assertion
        var expectedUserAccountData = new UserAccountData
        {
            UserName = command.UserName,
            Email = command.Email,
            MustChangePassword = true,
            Employee = new EmployeeData
            {
                EmployeeNumber = employeeNumber,
                FullEnName = command.FullEnName,
                FullArName = command.FullArName,
            }
        };

        // Mock user reader to return the expected user account data
        userReader
            .GetByIdAsync(
                Arg.Any<Guid>(),
                Arg.Any<CancellationToken>())
            .Returns(expectedUserAccountData);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        // Verify that the result is not null
        Assert.NotNull(result);

        // Verify that the created employee
        Assert.Equal(employeeNumber, createdEmployee!.Number);
        Assert.Equal(command.FullEnName, createdEmployee.FullEnName);
        Assert.Equal(command.FullArName, createdEmployee.FullArName);
        Assert.Equal(EmployeeStatusIds.Active, createdEmployee.StatusId);
        Assert.Equal(currentUserId, createdEmployee.CreatedById);
        Assert.Equal(now, createdEmployee.CreatedAt);

        // Verify that the created user
        Assert.Equal(command.UserName, createdUser!.UserName);
        Assert.Equal(command.Email, createdUser.Email);
        Assert.Equal(UserStatusIds.Active, createdUser.StatusId);
        Assert.Null(createdUser.LastPasswordChangedAt);
        Assert.True(createdUser.MustChangePassword);
        Assert.Equal(currentUserId, createdUser.CreatedById);
        Assert.Equal(now, createdUser.CreatedAt);

        // Verify the output
        Assert.Equal(expectedUserAccountData, result.UserAccountData);

        // Test the dependencies were called as expected
        await userRepository.Received(1).AddAsync(
            Arg.Any<ApplicationUser>(),
            Arg.Any<Employee>(),
            Arg.Any<string>(),
            Arg.Any<CancellationToken>());

        await userReader.Received(1).GetByIdAsync(
            createdUser.Id,
            Arg.Any<CancellationToken>());
    }
}

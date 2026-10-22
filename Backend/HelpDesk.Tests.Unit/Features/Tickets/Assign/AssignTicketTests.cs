using HelpDesk.src.Features.Tickets.Assign;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Assign;

public sealed class AssignTicketTests
{
    [Fact]
    public async Task Should_assign_ticket()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var ticketRepository = new Mock<ITicketRepository>();
        var ticketReader = new Mock<ITicketReader>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<AssignTicketHandler>>();

        // SUT (System Under Test)
        var handler = new AssignTicketHandler(
            userContext.Object,
            ticketRepository.Object,
            ticketReader.Object,
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // provide a concrete current user id and configure the substitute
        var currentUserId = Guid.NewGuid();

        userContext
            .SetupGet(x => x.GuidUserId)
            .Returns(currentUserId);

        // create new clock
        var now = new DateTimeOffset();

        dateTimeService
            .SetupGet(x => x.UtcNow)
            .Returns(now);

        // Create new ticket ID
        var ticketId = Guid.NewGuid();

        // create new user ID
        var userId = Guid.NewGuid();

        // Create new ticket row version
        byte[] ticketRowVersion = [];

        // Assign a command with ticket details
        var command = new AssignTicketCommand(
            userId,
            ticketId,
            ticketRowVersion);

        // Mock userReader to return true for IsEmployee
        userReader
            .Setup(x => x.IsEmployee(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock ticket repository to capture the ticket being added
        ticketRepository
            .Setup(x => x.AssignAsync(
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<byte[]>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.FromResult(1));

        // Prepare expected ticket data for assertion
        var expectedTicketData = new TicketData();

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .Setup(x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedTicketData);

        // Create user returned by the provider
        var user = new ApplicationUser();

        // Mock user reader to return the expected user
        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        ticketRepository.Verify(
            x => x.AssignAsync(
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<byte[]>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()),
            Times.Once);

        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}

using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Delete;

public sealed class DeleteTicketTests
{
    [Fact]
    public async Task Should_delete_ticket()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userReader = new Mock<IUserReader>();
        var ticketRepository = new Mock<ITicketRepository>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<DeleteTicketHandler>>();

        // SUT (System Under Test)
        var handler = new DeleteTicketHandler(
            userContext.Object,
            userReader.Object,
            ticketRepository.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // Mock user context to return user ID
        var userId = Guid.NewGuid();

        userContext
            .SetupGet(x => x.GuidUserId)
            .Returns(userId);

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        dateTimeService
            .SetupGet(x => x.UtcNow)
            .Returns(now);

        // Mock ticketId
        var ticketId = Guid.NewGuid();

        // Mock ticket row version
        byte[] ticketRowVersion = [];

        // Mock DeleteTicketCommand
        var command = new DeleteTicketCommand(
            ticketId,
            ticketRowVersion);

        // Mock ticket repository
        ticketRepository
            .Setup(x => x.DeleteAsync(
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<byte[]>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.FromResult(1));

        // Mock a real user with the same userId
        var user = new ApplicationUser { Id = userId };

        // Mock user provider to return a valid user with the same userId
        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        // Act
        await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        ticketRepository.Verify(
            x => x.DeleteAsync(
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<byte[]>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()));

        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<TicketDeletedEvent>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}

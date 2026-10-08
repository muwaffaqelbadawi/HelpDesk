using HelpDesk.src.Features.Tickets.Update;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Update;

public sealed class UpdateTicketTests
{
    [Fact]
    public async Task Should_update_ticket()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userProvider = new Mock<IUserProvider>();
        var ticketRepository = new Mock<ITicketRepository>();
        var ticketReader = new Mock<ITicketReader>();
        var ticketLookup = new Mock<ITicketLookupService>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<UpdateTicketHandler>>();

        // SUT (System Under Test)
        var handler = new UpdateTicketHandler(
            userContext.Object,
            userProvider.Object,
            ticketRepository.Object,
            ticketReader.Object,
            ticketLookup.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // Mock userId
        var userId = Guid.NewGuid();

        userContext
            .SetupGet(x => x.GuidUserId)
            .Returns(userId);

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        dateTimeService
            .SetupGet(x => x.UtcNow)
            .Returns(now);

        // create new ticket ID
        var ticketId = Guid.NewGuid();

        // create new ticket row version
        byte[] ticketRowVersion = [];

        // Create lookup values and configure lookup service
        var ticketPriorityId = Guid.NewGuid();
        var ticketStatusId = Guid.NewGuid();

        var priority = new LookupSeed(ticketPriorityId, string.Empty, string.Empty);

        var status = new LookupSeed(ticketStatusId, string.Empty, string.Empty);

        ticketLookup
            .Setup(x => x.GetPriority(ticketPriorityId))
            .Returns(priority);

        ticketLookup
            .Setup(x => x.GetStatus(ticketStatusId))
            .Returns(status);

        // Create command
        var command = new UpdateTicketCommand(
            TicketId: ticketId,
            TicketTitle: string.Empty,
            TicketSubject: string.Empty,
            TicketPriorityId: ticketPriorityId,
            TicketStatusId: ticketStatusId,
            TicketRowVersion: ticketRowVersion);

        // Configure repository and reader behavior
        ticketRepository
            .Setup(x => x.UpdateAsync(
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<string>(),
                It.IsAny<string>(),
                It.IsAny<LookupSeed>(),
                It.IsAny<LookupSeed>(),
                It.IsAny<byte[]>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.FromResult(1));

        ticketReader
            .Setup(x => x.GetNewRowAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.FromResult(ticketRowVersion));

        // Mock a real user with the same userId
        var user = new ApplicationUser { Id = userId };

        // Mock user provider to return a valid user with the same userId
        userProvider
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(ticketRowVersion, result.NewRowVersion);

        ticketRepository.Verify(
            x => x.UpdateAsync(
                    It.IsAny<Guid>(),
                    It.IsAny<Guid>(),
                    It.IsAny<string>(),
                    It.IsAny<string>(),
                    It.IsAny<LookupSeed>(),
                    It.IsAny<LookupSeed>(),
                    It.IsAny<byte[]>(),
                    It.IsAny<DateTimeOffset>(),
                    It.IsAny<CancellationToken>()),
                Times.Once());

        ticketReader.Verify(
            x => x.GetNewRowAsync(
                    It.IsAny<Guid>(),
                    It.IsAny<CancellationToken>()),
                Times.Once());

        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()),
                Times.Once());
    }
}

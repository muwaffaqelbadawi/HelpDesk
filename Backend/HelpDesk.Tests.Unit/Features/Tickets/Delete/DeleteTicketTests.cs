using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Delete;

public sealed class DeleteTicketTests
{
    [Fact]
    public async Task Should_delete_ticket()
    {
        // Arrange
        var userContext = Substitute.For<IUserContext>();
        var userProvider = Substitute.For<IUserProvider>();
        var ticketRepository = Substitute.For<ITicketRepository>();
        var dateTimeService = Substitute.For<IDateTimeService>();
        var dispatcher = Substitute.For<IDomainEventDispatcher>();
        var logger = Substitute.For<ILogger<DeleteTicketHandler>>();

        var handler = new DeleteTicketHandler(
            userContext,
            userProvider,
            ticketRepository,
            dateTimeService,
            dispatcher,
            logger);

        // provide a concrete user id and configure the substitute
        var userId = Guid.NewGuid();
        userContext.GuidUserId.Returns(userId);

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();
        dateTimeService.UtcNow.Returns(now);

        // Mock ticketId and row version
        var ticketId = Guid.NewGuid();
        byte[] ticketRowVersion = [];

        var command = new DeleteTicketCommand(
            TicketId: ticketId,
            TicketRowVersion: ticketRowVersion);

        ticketRepository
            .DeleteAsync(
                Arg.Is(userId),
                Arg.Is(ticketId),
                Arg.Is(ticketRowVersion),
                Arg.Is(now),
                Arg.Any<CancellationToken>())
            .Returns(Task.FromResult(1));

        // Mock user provider to return a valid user
        userProvider.GetUserAsync(userId.ToString()).Returns(new ApplicationUser());

        // Act
        await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        await ticketRepository.Received(1).DeleteAsync(
                Arg.Is(userId),
                Arg.Is(ticketId),
                Arg.Is(ticketRowVersion),
                Arg.Is(now),
                Arg.Any<CancellationToken>());

        await dispatcher.Received(1).DispatchAsync(
                Arg.Is<TicketDeletedEvent>(e => e.TicketId == ticketId),
                Arg.Any<CancellationToken>());
    }
}

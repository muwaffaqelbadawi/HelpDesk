using HelpDesk.src.Features.Tickets.Assign;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.Extensions.Logging;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Assign;

public sealed class AssignTicketTests
{
    [Fact]
    public async Task Should_assign_ticket()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var userContext = Substitute.For<IUserContext>();
        var userProvider = Substitute.For<IUserProvider>();
        var ticketRepository = Substitute.For<ITicketRepository>();
        var ticketReader = Substitute.For<ITicketReader>();
        var userReader = Substitute.For<IUserReader>();
        var dateTimeService = Substitute.For<IDateTimeService>();
        var dispatcher = Substitute.For<IDomainEventDispatcher>();
        var logger = Substitute.For<ILogger<AssignTicketHandler>>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new AssignTicketHandler(
            userContext,
            userProvider,
            ticketRepository,
            ticketReader,
            userReader,
            dateTimeService,
            dispatcher,
            logger);

        // provide a concrete user id and configure the substitute
        var userId = Guid.NewGuid();

        userContext
            .GuidUserId
            .Returns(userId);

        // Mock currentUserId
        var currentUserId = userId;

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        dateTimeService.UtcNow.Returns(now);

        // Mock ticketId and row version
        var ticketId = Guid.NewGuid();
        byte[] ticketRowVersion = [];

        // Assign a command with ticket details
        var command = new AssignTicketCommand(
            UserId: userId,
            TicketId: ticketId,
            TicketRowVersion: ticketRowVersion);

        // Mock userReader to return true for IsEmployee
        userReader
            .IsEmployee(
                Arg.Is(userId),
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock ticket repository to capture the ticket being added
        ticketRepository
            .AssignAsync(
                Arg.Is<Guid>(g => g == userId),
                Arg.Is<Guid>(g => g == userId),
                Arg.Is<Guid>(g => g == ticketId),
                Arg.Is<byte[]>(b => b.SequenceEqual(ticketRowVersion)),
                Arg.Is<DateTimeOffset>(d => d == now),
                Arg.Any<CancellationToken>())
            .Returns(Task.FromResult(1));

        // Prepare expected ticket data for assertion
        var expectedTicketData = new TicketData();

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .GetByIdAsync(
                Arg.Any<Guid>(),
                Arg.Any<CancellationToken>())
            .Returns(expectedTicketData);

        // Mock user
        var user = new ApplicationUser();

        // Mock user provider to return the expected user
        userProvider
            .GetUserAsync(userId.ToString())
            .Returns(user);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // repository
        await ticketRepository.Received(1).AssignAsync(
            Arg.Is(currentUserId),
            Arg.Is(userId),
            Arg.Is(ticketId),
            Arg.Is(ticketRowVersion),
            Arg.Is(now),
            Arg.Any<CancellationToken>());

        await dispatcher.Received(1).DispatchAsync(
            Arg.Is<TicketAssignedEvent>(e => e.TicketId == ticketId),
            Arg.Any<CancellationToken>());
    }
}

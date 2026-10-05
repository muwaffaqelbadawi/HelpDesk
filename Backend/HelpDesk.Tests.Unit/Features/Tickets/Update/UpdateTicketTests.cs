using HelpDesk.src.Features.Tickets.Update;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Update;

public sealed class UpdateTicketTests
{
    [Fact]
    public async Task Should_update_ticket()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var userContext = Substitute.For<IUserContext>();
        var userProvider = Substitute.For<IUserProvider>();
        var ticketRepository = Substitute.For<ITicketRepository>();
        var ticketReader = Substitute.For<ITicketReader>();
        var ticketLookup = Substitute.For<ITicketLookupService>();
        var dateTimeService = Substitute.For<IDateTimeService>();
        var dispatcher = Substitute.For<IDomainEventDispatcher>();
        var logger = Substitute.For<ILogger<UpdateTicketHandler>>();

        // SUT (System Under Test)
        var handler = new UpdateTicketHandler(
            userContext,
            userProvider,
            ticketRepository,
            ticketReader,
            ticketLookup,
            dateTimeService,
            dispatcher,
            logger);

        // Mock currentUserId
        var userId = Guid.NewGuid();
        userContext.GuidUserId.Returns(userId);

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();
        dateTimeService.UtcNow.Returns(now);

        // Mock ticketId and row version
        var ticketId = Guid.NewGuid();
        byte[] ticketRowVersion = [];

        var ticketPriorityId = Guid.NewGuid();
        var ticketStatusId = Guid.NewGuid();

        // Create lookup values and configure lookup service
        var priority = new LookupSeed(ticketPriorityId, "Low", "LOW");
        var status = new LookupSeed(ticketStatusId, "Open", "OPEN");
        ticketLookup.GetPriority(ticketPriorityId).Returns(priority);
        ticketLookup.GetStatus(ticketStatusId).Returns(status);

        // Create command
        var command = new UpdateTicketCommand(
            TicketId: ticketId,
            TicketTitle: "Test Ticket",
            TicketSubject: "Test Subject",
            TicketPriorityId: ticketPriorityId,
            TicketStatusId: ticketStatusId,
            TicketRowVersion: ticketRowVersion);

        // Configure repository and reader behavior
        ticketRepository
            .UpdateAsync(
                Arg.Is(userId),
                Arg.Is(ticketId),
                Arg.Is(command.TicketTitle),
                Arg.Is(command.TicketSubject),
                Arg.Is(priority),
                Arg.Is(status),
                Arg.Is(ticketRowVersion),
                Arg.Is(now),
                Arg.Any<CancellationToken>())
            .Returns(Task.FromResult(1));

        ticketReader.GetNewRowAsync(
                Arg.Is(ticketId),
                Arg.Any<CancellationToken>())
            .Returns(Task.FromResult(ticketRowVersion));

        userProvider.GetUserAsync(userId.ToString()).Returns(new ApplicationUser());

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(ticketRowVersion, result.NewRowVersion);

        await ticketRepository.Received(1).UpdateAsync(
            Arg.Is(userId),
            Arg.Is(ticketId),
            Arg.Is(command.TicketTitle),
            Arg.Is(command.TicketSubject),
            Arg.Is(priority),
            Arg.Is(status),
            Arg.Is(ticketRowVersion),
            Arg.Is(now),
            Arg.Any<CancellationToken>());

        await ticketReader.Received(1).GetNewRowAsync(
            Arg.Is(ticketId),
            Arg.Any<CancellationToken>());

        await dispatcher.Received(1).DispatchAsync(
            Arg.Is<TicketUpdatedEvent>(e => e.TicketId == ticketId),
            Arg.Any<CancellationToken>());
    }
}

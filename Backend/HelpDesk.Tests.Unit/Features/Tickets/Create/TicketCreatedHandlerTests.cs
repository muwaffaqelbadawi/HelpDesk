using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Shared.Histories.HistoryTypes;
using HelpDesk.src.Shared.Interfaces;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Create;

public sealed class TicketCreatedHandlerTests
{
    [Fact]
    public async Task Should_write_ticket_history()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var historyWriter = Substitute.For<ITicketWriter>();

        // userId
        var userId = Guid.NewGuid();

        // ticketId
        var ticketId = Guid.NewGuid();

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset(
            2026, 8, 13, 14, 30, 0,
            TimeSpan.Zero);

        // occurredAt
        var occurredAt = now;

        var @event = new TicketCreated(
            UserId: userId,
            TicketId: ticketId,
            OccurredAt: occurredAt);

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var sut = new TicketCreatedHandler(historyWriter);

        // Act
        await sut.Handle(@event, CancellationToken.None);

        // Assert

        // Verify the WriteAsync was called once.
        await historyWriter.Received(1).WriteAsync(
            userId: userId,
            ticketId: ticketId,
            type: TicketHistoryTypes.Created,
            occurredAt: occurredAt,
            cancellationToken: Arg.Any<CancellationToken>());
    }
}

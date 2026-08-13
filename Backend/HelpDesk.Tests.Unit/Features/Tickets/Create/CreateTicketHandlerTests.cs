using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketStatuses;
using HelpDesk.src.Infrastructure.Services.SQLServerSequence;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.Extensions.Logging;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Create;

public sealed class CreateTicketHandlerTests
{
    [Fact]
    public async Task Should_create_ticket()
    {
        // Arrange

        // Mock dependencies (substitutes) 
        var userContext = Substitute.For<IUserContext>();
        var ticketRepository = Substitute.For<ITicketRepository>();
        var ticketReader = Substitute.For<ITicketReader>();
        var numberingService = Substitute.For<INumberingService>();
        var dateTimeService = Substitute.For<IDateTimeService>();
        var logger = Substitute.For<ILogger<CreateTicketHandler>>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new CreateTicketHandler(
            userContext,
            ticketRepository,
            ticketReader,
            numberingService,
            dateTimeService,
            logger);

        // Mock user context to return a specific user ID
        var userId = Guid.NewGuid();
        userContext.GuidUserId.Returns(userId);

        // Mock numbering service to return a specific ticket number
        var ticketNumber = "TKT-000001";
        numberingService.GetNextNumberAsync(
                NumberType.Ticket,
                Arg.Any<CancellationToken>())
            .Returns(ticketNumber);

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset(
            2026, 8, 13, 14, 30, 0,
            TimeSpan.Zero);
        dateTimeService.UtcNow.Returns(now);

        // Create a command with ticket details
        var command = new CreateTicketCommand(
            TicketTitle: "Cannot access email",
            TicketSubject: "My Outlook account is not working.");

        // Variable to capture the created ticket
        Ticket? createdTicket = null;

        // Mock ticket repository to capture the ticket being added
        ticketRepository
            .When(x => x.AddAsync(
                Arg.Any<Ticket>(),
                Arg.Any<CancellationToken>()))
            .Do(callInfo => createdTicket = callInfo.Arg<Ticket>());

        // Prepare expected ticket data for assertion
        var expectedTicketData = new TicketData
        {
            TicketNumber = ticketNumber,
            TicketTitle = command.TicketTitle,
            TicketSubject = command.TicketSubject,
            TicketPriority = "Low",
            TicketStatus = "Open",
            CreatedById = userId,
            CreatedAt = now,
        };

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .GetByIdAsync(
                Arg.Any<Guid>(),
                Arg.Any<CancellationToken>())
            .Returns(expectedTicketData);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        // Verify that the result is not null
        Assert.NotNull(result);

        Assert.NotEqual(Guid.Empty, createdTicket!.Id);
        Assert.Equal(ticketNumber, createdTicket.Number);
        Assert.Equal(command.TicketTitle, createdTicket.Title);
        Assert.Equal(command.TicketSubject, createdTicket.Subject);
        Assert.Equal(TicketStatusIds.Open, createdTicket.StatusId);
        Assert.Equal(TicketPriorityIds.Low, createdTicket.PriorityId);
        Assert.Equal(userId, createdTicket.CreatedById);
        Assert.Equal(now, createdTicket.CreatedAt);

        // Verify the output
        Assert.Equal(expectedTicketData, result.TicketData);

        // Test the dependencies were called as expected
        await ticketRepository.Received(1).AddAsync(
            Arg.Any<Ticket>(),
            Arg.Any<CancellationToken>());

        await ticketReader.Received(1).GetByIdAsync(
            createdTicket.Id,
            Arg.Any<CancellationToken>());
    }
}

using System.Text;
using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Create;

public sealed class CreateTicketTests
{
    [Fact]
    public async Task Should_create_ticket()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userReader = new Mock<IUserReader>();
        var ticketRepository = new Mock<ITicketRepository>();
        var ticketReader = new Mock<ITicketReader>();
        var numberingService = new Mock<INumberingService>();
        var dateTimeService = new Mock<IDateTimeService>();
        var attachmentStorage = new Mock<IAttachmentStorage>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<CreateTicketHandler>>();

        // SUT (System Under Test)
        var handler = new CreateTicketHandler(
            userContext.Object,
            userReader.Object,
            ticketRepository.Object,
            ticketReader.Object,
            numberingService.Object,
            dateTimeService.Object,
            attachmentStorage.Object,
            dispatcher.Object,
            logger.Object);

        // Mock user context to return a specific user ID
        var userId = Guid.NewGuid();

        userContext
            .SetupGet(x => x.GuidUserId)
            .Returns(userId);

        // Mock numbering service to return a specific ticket number
        var ticketNumber = string.Empty;

        numberingService
            .Setup(x => x.GetNextTicketNumberAsync(It.IsAny<CancellationToken>()))
            .ReturnsAsync(ticketNumber);

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        dateTimeService
            .SetupGet(x => x.UtcNow)
            .Returns(now);

        attachmentStorage
            .Setup(x => x.UploadAsync(
                It.IsAny<Guid>(),
                It.IsAny<Stream>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync((Guid attachmentId, Stream file, CancellationToken cancellationToken) =>
            {
                // Simulate the upload and return the storage key
                return attachmentId.ToString();
            });

        var fileContent = Encoding.UTF8.GetBytes("Test attachment content");

        var stream = new MemoryStream(fileContent);

        var attachment = new FormFile(
            stream,
            0,
            fileContent.Length,
            "Attachments",
            "test.txt")
        {
            Headers = new HeaderDictionary(),
            ContentType = "text/plain"
        };

        // Create a command with ticket details
        var command = new CreateTicketCommand(
            TicketTitle: "Ticket title",
            TicketSubject: "Ticket subject",
            CommentContent: "Comment content",
            Attachments: new List<IFormFile> { attachment });

        // Variable to capture the created ticket
        Ticket? ticket = null;
        TicketComment? comment = null;
        List<TicketAttachment>? capturedAttachments = null;

        // Capture the created ticket for assertions
        ticketRepository
            .Setup(x => x.AddAsync(
                It.IsAny<Ticket>(),
                It.IsAny<TicketComment>(),
                It.IsAny<List<TicketAttachment>>(),
                It.IsAny<CancellationToken>()))
            .Callback<Ticket, TicketComment, List<TicketAttachment>, CancellationToken>(
            (t, c, attachments, ct) =>
            {
                ticket = t;
                comment = c;
                capturedAttachments = attachments;
            })
            .Returns(Task.CompletedTask);

        var expectedCreatedByName = "Test User";

        // Create a real user with the same userId
        var user = new ApplicationUser
        {
            Id = userId,
            Employee = new Employee
            {
                FullEnName = expectedCreatedByName
            }
        };

        // Prepare expected ticket data for assertion
        var expectedTicketData = new TicketData
        {
            TicketId = ticket?.Id ?? Guid.NewGuid(),
            TicketNumber = ticketNumber,
            TicketTitle = command.TicketTitle,
            TicketSubject = command.TicketSubject,
            TicketPriority = string.Empty,
            TicketStatus = string.Empty,
            CreatedById = userId,
            CreatedByName = expectedCreatedByName,
            CreatedAt = now,
        };

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .Setup(x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedTicketData);

        // Mock user reader to return the expected user
        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.NotEqual(Guid.Empty, ticket!.Id);
        Assert.Equal(ticketNumber, ticket.Number);
        Assert.Equal(command.TicketTitle, ticket.Title);
        Assert.Equal(command.TicketSubject, ticket.Subject);
        Assert.Equal(TicketStatusIds.Open, ticket.StatusId);
        Assert.Equal(TicketPriorityIds.Medium, ticket.PriorityId);
        Assert.Equal(userId, ticket.CreatedById);
        Assert.Equal(expectedTicketData, result.TicketData);
        Assert.Equal(now, ticket.CreatedAt);
        Assert.Equal(expectedTicketData, result.TicketData);

        // Verify
        ticketRepository.Verify(
            x => x.AddAsync(
                It.IsAny<Ticket>(),
                It.IsAny<TicketComment>(),
                It.IsAny<List<TicketAttachment>>(),
                It.IsAny<CancellationToken>()),
            Times.Once);

        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}

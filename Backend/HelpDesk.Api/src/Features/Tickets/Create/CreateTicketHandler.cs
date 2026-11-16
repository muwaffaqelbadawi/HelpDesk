using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed class CreateTicketHandler
    : ICommandHandler<CreateTicketCommand, CreateTicketResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserReader _userReader;
    private readonly ITicketRepository _ticketRepository;
    private readonly ITicketReader _ticketReader;
    private readonly INumberingService _numberingService;
    private readonly IDateTimeService _dateTimeService;
    private readonly IAttachmentStorage _attachmentStorage;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<CreateTicketHandler> _logger;

    public CreateTicketHandler(
        IUserContext userContext,
        IUserReader userReader,
        ITicketRepository ticketRepository,
        ITicketReader ticketReader,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        IAttachmentStorage attachmentStorage,
        IDomainEventDispatcher dispatcher,
        ILogger<CreateTicketHandler> logger)
    {
        _userContext = userContext;
        _userReader = userReader;
        _ticketRepository = ticketRepository;
        _ticketReader = ticketReader;
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _attachmentStorage = attachmentStorage;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<CreateTicketResponse> HandleAsync(
        CreateTicketCommand command,
        CancellationToken cancellationToken)
    {
        // user ID
        var userId = _userContext.GuidUserId;

        // now
        var now = _dateTimeService.UtcNow;

        // Numbering service
        var ticketNumber = await _numberingService.GetNextTicketNumberAsync(
            cancellationToken);

        // Ticket
        var ticket = new Ticket
        {
            Id = Guid.NewGuid(),
            Number = ticketNumber,
            Title = command.TicketTitle,
            Subject = command.TicketSubject,
            StatusId = TicketStatusIds.Open,
            PriorityId = TicketPriorityIds.Medium,
            CreatedById = userId,
            CreatedAt = now,
        };

        // ticket ID
        var ticketId = ticket.Id;

        var comment = new TicketComment
        {
            Id = Guid.NewGuid(),
            TicketId = ticketId,
            Content = command.CommentContent,
            CreatedById = userId,
            CreatedAt = now,
            IsInternal = false,
        };

        // Upload files and construct TicketAttachment entities here.
        var attachments = new List<TicketAttachment>();
        var uploadedStorageKeys = new List<string>();

        try
        {
            foreach (var uploadedFile in command.Attachments)
            {
                var attachmentId = Guid.NewGuid();

                await using var stream = uploadedFile.OpenReadStream();

                var storageKey = await _attachmentStorage.UploadAsync(
                    attachmentId,
                    stream,
                    cancellationToken);

                uploadedStorageKeys.Add(storageKey);

                var attachment = new TicketAttachment
                {
                    Id = attachmentId,
                    TicketCommentId = comment.Id,
                    FileName = uploadedFile.FileName,
                    ContentType = uploadedFile.ContentType,
                    Size = uploadedFile.Length,
                    StorageKey = storageKey,
                    UploadedById = userId,
                    UploadedAt = now,
                };

                attachments.Add(attachment);
            }

            // Ticket repository
            // Persist ticket + comment + attachments atomically
            await _ticketRepository.AddAsync(
                ticket,
                comment,
                attachments,
                cancellationToken);

        }
        catch
        {
            foreach (var storageKey in uploadedStorageKeys)
            {
                try
                {
                    await _attachmentStorage.DeleteAsync(
                        storageKey,
                        CancellationToken.None);
                }
                catch (Exception cleanupException)
                {
                    _logger.LogError(
                        cleanupException,
                        "Failed to clean up uploaded attachment: {StorageKey}",
                        storageKey);
                }
            }

            throw;
        }

        // Ticket reader
        var ticketData = await _ticketReader.GetByIdAsync(
            ticketId,
            cancellationToken);

        // Successful log
        _logger.LogInformation("Ticket created successfully: {ticket}" +
            "by user: {userId}.",
            ticketId,
            userId);

        // Retrieve current user for domain event
        var user = await _userReader.GetUserAsync(userId.ToString())
            ?? throw new AuthenticationRequiredException();

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new TicketCreatedEvent(
                user,
                ticketId,
                now),
            cancellationToken);

        return new CreateTicketResponse(ticketData);
    }
}

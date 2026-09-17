using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed class CreateTicketHandler :
    ICommandHandler<CreateTicketCommand, CreateTicketResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly ITicketRepository _ticketRepository;
    private readonly ITicketReader _ticketReader;
    private readonly INumberingService _numberingService;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<CreateTicketHandler> _logger;

    public CreateTicketHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        ITicketRepository ticketRepository,
        ITicketReader ticketReader,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<CreateTicketHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _ticketRepository = ticketRepository;
        _ticketReader = ticketReader;
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<CreateTicketResponse> HandleAsync(
        CreateTicketCommand command,
        CancellationToken cancellationToken)
    {
        // Self-service
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
            PriorityId = TicketPriorityIds.Low,
            CreatedById = userId,
            CreatedAt = now,
        };

        // Ticket repo
        await _ticketRepository.AddAsync(
            ticket,
            cancellationToken);

        // Ticket reader
        var ticketData = await _ticketReader.GetByIdAsync(
            ticket.Id,
            cancellationToken);

        // Successful log
        _logger.LogInformation("Ticket created successfully: {ticket}" +
            "by user: {userId}.",
            ticket.Id,
            userId);

        // Retrieve current user for domain event
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new AuthenticationRequiredException();

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new TicketCreatedEvent(
                User: user,
                OccurredAt: now,
                TicketId: ticket.Id),
            cancellationToken: cancellationToken);

        return new CreateTicketResponse(ticketData);
    }
}

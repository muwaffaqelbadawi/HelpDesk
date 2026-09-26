using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Update;

public sealed class UpdateTicketHandler :
    ICommandHandler<UpdateTicketCommand, UpdateTicketResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly ITicketRepository _ticketRepository;
    private readonly ITicketReader _ticketReader;
    private readonly ITicketLookupService _ticketLookup;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<UpdateTicketHandler> _logger;

    public UpdateTicketHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        ITicketRepository ticketRepository,
        ITicketReader ticketReader,
        ITicketLookupService ticketLookup,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<UpdateTicketHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _ticketRepository = ticketRepository;
        _ticketReader = ticketReader;
        _ticketLookup = ticketLookup;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<UpdateTicketResponse> HandleAsync(
        UpdateTicketCommand command,
        CancellationToken cancellationToken)
    {
        var userId = _userContext.GuidUserId;

        var now = _dateTimeService.UtcNow;

        // Ticket priority
        var priority = _ticketLookup.GetPriority(command.TicketPriorityId);

        // Ticket status
        var status = _ticketLookup.GetStatus(command.TicketStatusId);

        // Ticket repo
        var rows = await _ticketRepository.UpdateAsync(
            userId: userId,
            ticketId: command.TicketId,
            ticketTitle: command.TicketTitle,
            ticketSubject: command.TicketSubject,
            priority: priority,
            status: status,
            ticketRowVersion: command.TicketRowVersion,
            now: now,
            cancellationToken);

        // check affected rows
        if (rows == 0)
        {
            throw new ConcurrencyException(
                $"Ticket {command.TicketId} was modified or deleted by another user.");
        }

        // Ticket reader
        var newRowVersion = await _ticketReader.GetNewRowAsync(
            ticketId: command.TicketId,
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("Ticket {TicketId} was updated successfully",
            command.TicketId);

        // Retrieve current user for domain event
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new AuthenticationRequiredException();

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new TicketUpdatedEvent(
                User: user,
                OccurredAt: now,
                TicketId: command.TicketId),
            cancellationToken: cancellationToken);

        // Return response
        return new UpdateTicketResponse(
            NewRowVersion: newRowVersion);
    }
}

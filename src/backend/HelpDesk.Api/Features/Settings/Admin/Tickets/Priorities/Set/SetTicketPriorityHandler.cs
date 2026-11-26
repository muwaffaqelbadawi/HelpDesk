using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Tickets.Priorities.Set;

public sealed class SetTicketPriorityHandler
    : ICommandHandler<SetTicketPriorityCommand, SetTicketPriorityResponse>
{
    private readonly IUserContext _userContext;
    private readonly ITicketRepository _ticketRepository;
    private readonly ITicketReader _ticketReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<SetTicketPriorityHandler> _logger;

    public SetTicketPriorityHandler(
        IUserContext userContext,
        ITicketRepository ticketRepository,
        ITicketReader ticketReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<SetTicketPriorityHandler> logger)
    {
        _userContext = userContext;
        _ticketRepository = ticketRepository;
        _ticketReader = ticketReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<SetTicketPriorityResponse> HandleAsync(
        SetTicketPriorityCommand command,
        CancellationToken cancellationToken)
    {
        // updater ID
        var updaterId = _userContext.GuidUserId;

        // user ID
        var userId = command.UserId;

        // ticket ID
        var ticketId = command.TicketId;

        // priority ID
        var priorityId = command.PriorityId;

        var ticket = await _ticketReader.GetTicketWithPriorityAsync(
            userId,
            ticketId,
            cancellationToken)
                ?? throw new TicketNotFoundException();

        var user = ticket.CreatedBy;

        var rows = await _ticketRepository.UpdateTicketPriorityAsync(
            userId,
            ticketId,
            priorityId,
            cancellationToken);

        if (rows == 0)
        {
            _logger.LogWarning(
                "Cannot update the ticket priority because ticket: {ticket} was not found",
                ticketId);

            throw new TicketNotFoundException();
        }

        var newPriority = await _ticketReader.GetTicketPriorityNameAsync(
            userId,
            ticketId,
            cancellationToken)
                ?? throw new TicketNotFoundException();

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new TicketPrioritySetEvent(
                UpdaterId: updaterId,
                TicketId: ticketId,
                PreviousPriority: ticket.Priority.Name,
                NewPriority: newPriority,
                User: user,
                OccurredAt: _dateTimeService.UtcNow),
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("User: {userId} TicketPriority changed successfully",
            userId);

        return new SetTicketPriorityResponse(newPriority);
    }
}

using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Assign;

public sealed class AssignTicketHandler
    : ICommandHandler<AssignTicketCommand, AssignTicketResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly ITicketRepository _ticketRepository;
    private readonly ITicketReader _ticketReader;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<AssignTicketHandler> _logger;

    public AssignTicketHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        ITicketRepository ticketRepository,
        ITicketReader ticketReader,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<AssignTicketHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _ticketRepository = ticketRepository;
        _ticketReader = ticketReader;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<AssignTicketResponse> HandleAsync(
        AssignTicketCommand command,
        CancellationToken cancellationToken)
    {
        // admin
        var currentUserId = _userContext.GuidUserId;

        // Assigned ticket
        var ticketId = command.TicketId;

        // user
        var userId = command.UserId;

        // now
        var now = _dateTimeService.UtcNow;

        var isEmployee = await _userReader.IsEmployee(
            userId: userId,
            cancellationToken: cancellationToken);

        if (!isEmployee)
        {
            throw new DomainException(
                $"User {userId} cannot be assigned tickets because they are not an employee.");
        }

        // Ticket repo
        var rows = await _ticketRepository.AssignAsync(
            currentUserId: currentUserId,
            userId: userId,
            ticketId,
            ticketRowVersion: command.TicketRowVersion,
            now: now,
            cancellationToken: cancellationToken);

        if (rows == 0)
        {
            var (assignedAt, _) = await _ticketReader.GetStateAsync(
                ticketId: ticketId,
                cancellationToken: cancellationToken);

            if (assignedAt is not null)
            {
                throw new DomainException($"Ticket {ticketId} is already assigned");
            }

            throw new ConcurrencyException(
                $"Ticket {ticketId} was modified or deleted by another user.");
        }

        // Successful log
        _logger.LogInformation(
            "Ticket {TicketId} assigned to user {UserId} by user {admin}",
            ticketId,
            userId,
            currentUserId);

        // ticket reader
        var ticketData = await _ticketReader.GetByIdAsync(
            ticketId: ticketId,
            cancellationToken: cancellationToken);

        // Retrieve current user for domain event
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new AuthenticationRequiredException();

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new TicketAssignedEvent(
                User: user,
                OccurredAt: now,
                TicketId: ticketId),
            cancellationToken: cancellationToken);

        return new AssignTicketResponse(ticketData);
    }
}

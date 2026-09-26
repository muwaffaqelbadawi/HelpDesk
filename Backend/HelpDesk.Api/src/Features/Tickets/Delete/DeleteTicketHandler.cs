using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Delete;

public sealed class DeleteTicketHandler :
    ICommandHandler<DeleteTicketCommand>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly ITicketRepository _ticketRepository;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<DeleteTicketHandler> _logger;

    public DeleteTicketHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        ITicketRepository ticketRepositor,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<DeleteTicketHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _ticketRepository = ticketRepositor;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task HandleAsync(
        DeleteTicketCommand command,
        CancellationToken cancellationToken)
    {
        var userId = _userContext.GuidUserId;

        var now = _dateTimeService.UtcNow;

        // Ticket repo
        var rows = await _ticketRepository.DeleteAsync(
            userId: userId,
            ticketId: command.TicketId,
            ticketRowVersion: command.TicketRowVersion,
            now: now,
            cancellationToken);

        // check affected rows
        if (rows == 0)
        {
            throw new ConcurrencyException(
                $"Ticket {command.TicketId} was modified or deleted by another user.");
        }

        // Successful log
        _logger.LogInformation("Ticket {TicketId} was deleted successfully",
            command.TicketId);

        // Retrieve current user for domain event
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new AuthenticationRequiredException();

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new TicketDeletedEvent(
                User: user,
                OccurredAt: now,
                TicketId: command.TicketId),
            cancellationToken: cancellationToken);
    }
}

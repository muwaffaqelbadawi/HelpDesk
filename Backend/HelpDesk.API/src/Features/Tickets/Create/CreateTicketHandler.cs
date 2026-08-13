using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketStatuses;
using HelpDesk.src.Infrastructure.Services.SQLServerSequence;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed class CreateTicketHandler :
    ICommandHandler<CreateTicketCommand, CreateTicketResponse>
{
    private readonly IUserContext _userContext;
    private readonly ITicketRepository _ticketRepository;
    private readonly ITicketReader _ticketReader;
    private readonly INumberingService _numberingService;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<CreateTicketHandler> _logger;

    public CreateTicketHandler(
        IUserContext userContext,
        ITicketRepository ticketRepository,
        ITicketReader ticketReader,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        ILogger<CreateTicketHandler> logger)
    {
        _userContext = userContext;
        _ticketRepository = ticketRepository;
        _ticketReader = ticketReader;
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
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
        var ticketNumber = await _numberingService.GetNextNumberAsync(
            NumberType.Ticket,
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



        _logger.LogInformation("Ticket created successfully.");

        return new CreateTicketResponse(ticketData);
    }
}

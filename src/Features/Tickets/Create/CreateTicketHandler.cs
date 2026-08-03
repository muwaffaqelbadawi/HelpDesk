using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketStatuses;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Tickets.Create;

public sealed class CreateTicketHandler :
    ICommandHandler<CreateTicketCommand, CreateTicketResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly INumberingService _numberingService;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<CreateTicketHandler> _logger;

    public CreateTicketHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        ILogger<CreateTicketHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<CreateTicketResponse> HandleAsync(
        CreateTicketCommand command,
        CancellationToken cancellationToken)
    {
        // Generate ticket number
        var ticketNumber = await _numberingService
            .GetNextTicketNumberValueAsync(cancellationToken);

        var userId = _userContext.GuidUserId;

        var ticket = new Ticket
        {
            Id = Guid.NewGuid(),
            Number = ticketNumber,
            Subject = command.Subject,
            Title = command.Title,
            StatusId = TicketStatusIds.Open,
            PriorityId = command.PriorityId ?? TicketPriorityIds.Medium,
            CreatedById = userId,
            CreatedAt = _dateTimeService.UtcNow,
        };

        _dbContext.Tickets.Add(ticket);
        await _dbContext.SaveChangesAsync(cancellationToken);

        var newTicket = await _dbContext.Tickets
            .AsNoTracking()
            .Where(t => t.Id == ticket.Id)
            .Select(t => new TicketData
            {
                TicketId = t.Id,
                TicketNumber = t.Number,
                TicketTitle = t.Title,
                TicketSubject = t.Subject,
                TicketStatus = t.Status.Name,
                TicketPriority = t.Priority.Name,
                TicketRowVersion = t.RowVersion
            })
            .SingleAsync(cancellationToken);

        return new CreateTicketResponse(
            TicketData: newTicket);
    }
}

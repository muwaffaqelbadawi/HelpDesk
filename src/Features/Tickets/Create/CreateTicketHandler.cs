using HelpDesk.src.Infrastructure.Database.Data.Business.BusinessSchemas;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.TicketStatuses;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
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
        var userId = _userContext.GuidUserId;

        var ticketNumber = await _numberingService.GetNextNumberAsync(
            NumberType.Ticket,
            cancellationToken);

        var ticket = new Ticket
        {
            Id = Guid.NewGuid(),
            Number = ticketNumber,
            Subject = command.TicketSubject,
            Title = command.TicketTitle,
            StatusId = TicketStatusIds.Open,
            PriorityId = command.TicketPriorityId ?? TicketPriorityIds.Medium,
            CreatedById = userId,
            CreatedAt = _dateTimeService.UtcNow,
        };

        _dbContext.Tickets.Add(ticket);
        await _dbContext.SaveChangesAsync(cancellationToken);

        var ticketData = await _dbContext.Tickets
            .AsNoTracking()
            .Where(t => t.Id == ticket.Id)
            .SelectTicketData()
            .SingleAsync(cancellationToken);

        return new CreateTicketResponse(ticketData);
    }
}

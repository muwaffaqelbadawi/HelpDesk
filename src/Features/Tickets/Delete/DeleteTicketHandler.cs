using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Delete;

public sealed class DeleteTicketHandler :
    ICommandHandler<DeleteTicketCommand>
{
    private readonly IUserProvider _currentUserProvider;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<DeleteTicketHandler> _logger;

    public DeleteTicketHandler(

        IUserProvider currentUserProvider,
        AppDbContext context,
        IDateTimeService dateTimeService,
        ILogger<DeleteTicketHandler> logger)
    {
        _currentUserProvider = currentUserProvider;
        _dbContext = context;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public Task HandleAsync(
        DeleteTicketCommand command,
        CancellationToken cancellationToken)
    {



        throw new NotImplementedException();
    }
}

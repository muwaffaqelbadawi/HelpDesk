using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Admin.Tickets.Status.Set;

public sealed class SetTicketStatusHandler
    : ICommandHandler<SetTicketStatusCommand, SetTicketStatusResponse>
{
    public Task<SetTicketStatusResponse> HandleAsync(
        SetTicketStatusCommand command,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}

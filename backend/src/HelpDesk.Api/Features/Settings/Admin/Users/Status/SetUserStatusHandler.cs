using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Users.Status;

public sealed class SetUserStatusHandler
    : ICommandHandler<SetUserStatusCommand, SetUserStatusResponse>
{
    public Task<SetUserStatusResponse> HandleAsync(
        SetUserStatusCommand command,
        CancellationToken cancellationToken)
    {



        throw new NotImplementedException();
    }
}

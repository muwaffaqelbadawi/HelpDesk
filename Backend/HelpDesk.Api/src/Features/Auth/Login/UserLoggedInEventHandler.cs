using HelpDesk.src.Features.Auth.UserSession;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Login;

public sealed class UserLoggedInEventHandler(
    ICommandHandler<UserSessionCommand> handler)
        : IDomainEventHandler<LoginEvent>
{
    public Task HandleAsync(
        LoginEvent @event,
        CancellationToken cancellationToken = default)
    {
        var command = new UserSessionCommand(
            User: @event.User,
            OccurredAt: @event.OccurredAt,
            StaySignedIn: @event.StaySignedIn,
            SessionId: @event.SessionId);

        return handler.HandleAsync(
            command,
            cancellationToken);
    }
}

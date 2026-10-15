using HelpDesk.src.Features.Auth.UserSession;
using HelpDesk.src.Shared.Exceptions;
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
        var user = @event.User;
        var occurredAt = @event.OccurredAt;
        var staySignedIn = @event.StaySignedIn;
        var sessionId = @event.SessionId;

        if (user is null)
        {
            throw new ValidationException(
                errors: new()
                {
                    ["user"] = ["user is missing or invalid."]
                });
        }

        if (sessionId == Guid.Empty)
        {
            throw new ValidationException(
                errors: new()
                {
                    ["sessionId"] = ["sessionId is missing or invalid."]
                });
        }

        var command = new UserSessionCommand(
            user,
            occurredAt,
            staySignedIn,
            sessionId);

        return handler.HandleAsync(
            command,
            cancellationToken);
    }
}

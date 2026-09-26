using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.User.UpdateCurrent;

public sealed class CurrentUserAccountUpdatedEventHandler(IUserWriter historyWriter)
    : IDomainEventHandler<CurrentUserAccountUpdatedEvent>
{
    public Task HandleAsync(
        CurrentUserAccountUpdatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return historyWriter.WriteAsync(
            userId: @event.User.Id,
            type: UserHistoryType.Updated,
            occurredAt: @event.OccurredAt,
            cancellationToken: cancellationToken);
    }
}

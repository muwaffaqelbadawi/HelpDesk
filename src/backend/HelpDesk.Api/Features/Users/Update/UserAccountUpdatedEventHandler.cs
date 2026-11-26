using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Users.Update;

public sealed class UserAccountUpdatedEventHandler(IUserRepository repository)
    : IDomainEventHandler<UserAccountUpdatedEvent>
{
    public Task HandleAsync(
        UserAccountUpdatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return repository.AddToHistory(
           userId: @event.User.Id,
           type: UserHistoryType.Updated,
           occurredAt: @event.OccurredAt,
           cancellationToken: cancellationToken);
    }
}

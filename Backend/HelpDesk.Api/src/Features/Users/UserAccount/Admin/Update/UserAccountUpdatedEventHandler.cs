using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.Admin.Update;

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

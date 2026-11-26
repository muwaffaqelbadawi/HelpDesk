using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Users.Delete;

public sealed class UserAccountDeletedEventHandler(IUserRepository repository)
    : IDomainEventHandler<UserAccountDeletedEvent>
{
    public Task HandleAsync(
        UserAccountDeletedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return repository.AddToHistory(
           userId: @event.User.Id,
           type: UserHistoryType.Deleted,
           occurredAt: @event.OccurredAt,
           cancellationToken: cancellationToken);
    }
}

using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.Delete;

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

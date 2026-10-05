using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UpdateMy;

public sealed class MyUserAccountUpdatedEventHandler(IUserRepository repository)
    : IDomainEventHandler<MyUserAccountUpdatedEvent>
{
    public Task HandleAsync(
        MyUserAccountUpdatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return repository.AddToHistory(
            userId: @event.User.Id,
            type: UserHistoryType.Updated,
            occurredAt: @event.OccurredAt,
            cancellationToken: cancellationToken);
    }
}

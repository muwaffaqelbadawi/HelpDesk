using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.Create;

public sealed class UserAccountCreatedEventHandler(IUserRepository repository)
    : IDomainEventHandler<UserAccountCreatedEvent>
{
    public Task HandleAsync(
        UserAccountCreatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return repository.AddToHistory(
           userId: @event.User.Id,
           type: UserHistoryType.Created,
           occurredAt: @event.OccurredAt,
           cancellationToken: cancellationToken);
    }
}

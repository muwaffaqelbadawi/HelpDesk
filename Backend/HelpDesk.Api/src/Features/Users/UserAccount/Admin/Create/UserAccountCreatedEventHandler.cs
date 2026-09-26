using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.Admin.Create;

public sealed class UserAccountCreatedEventHandler(IUserWriter historyWriter)
    : IDomainEventHandler<UserAccountUpdatedEvent>
{
    public Task HandleAsync(
        UserAccountUpdatedEvent @event,
        CancellationToken cancellationToken = default)
    {
        return historyWriter.WriteAsync(
           userId: @event.User.Id,
           type: UserHistoryType.Created,
           occurredAt: @event.OccurredAt,
           cancellationToken: cancellationToken);
    }
}

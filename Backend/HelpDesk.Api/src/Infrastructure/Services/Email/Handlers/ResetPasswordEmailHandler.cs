using HelpDesk.src.Features.Auth.ResetPassword;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email.Handlers;

public sealed class ResetPasswordEmailHandler(
    //IQueueEmailService queueEmailService,
    //IUserContext userContext,
    //ILogger<ResetPasswordEmailHandler> logger
    )
        : IDomainEventHandler<PasswordResetEvent>
{
    public Task HandleAsync(
        PasswordResetEvent @event,
        CancellationToken cancellationToken = default)
    {


        throw new NotImplementedException();
    }
}

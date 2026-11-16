using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed class PasswordChangedEmailEventHandler(
    //UserManager<ApplicationUser> userManager,
    //IOptions<CorsOptions> corsOptions,
    //IQueueEmailService queueEmailService,
    //IUserContext userContext,
    //ILogger<UserLoggedInEmailEventHandler> logger
    )
        : IDomainEventHandler<PasswordChangedEvent>
{
    public Task HandleAsync(
        PasswordChangedEvent @event,
        CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException();
    }
}

using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Features.Auth.UserSession;

public sealed class UserSessionHandler(
    IUserSessionRepository userSessionRepository,
    IUserContext userContext,
    IOptions<UserSessionOptions> userSessionOptions,
    ILogger<UserSessionHandler> logger)
        : IDomainEventHandler<LoginEvent>
{
    public async Task HandleAsync(
        LoginEvent @event,
        CancellationToken cancellationToken)
    {
        logger.LogInformation("UserSessionHandler: Handling login event for user {UserId}",
            @event.User.Id);

        var sessionExpiresAt = @event.OccurredAt
            .Add(userSessionOptions.Value.UserSessionLifetime);

        // Create new user session
        var userSession = new ApplicationUserSession
        {
            UserId = @event.User.Id,
            UserAgent = userContext.UserAgent,
            Browser = userContext.Browser,
            IpAddress = userContext.IpAddress,
            CreatedAt = @event.OccurredAt,
            LastActivityAt = @event.OccurredAt,
            ExpiresAt = sessionExpiresAt
        };

        // User session repo
        await userSessionRepository.AddAsync(
            userSession: userSession,
            cancellationToken: cancellationToken);
    }
}

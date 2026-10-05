using HelpDesk.src.Features.Auth.UserSession.SessionActivity;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Middleware;

public sealed class UserSessionActivityMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(
        HttpContext context,
        IUserContext userContext,
        ICommandHandler<UserSessionActivityCommand> userSessionActivityHandler)
    {
        if (!userContext.IsAuthenticated)
        {
            await next(context);
            return;
        }

        var sessionId = userContext.SessionId;

        var command = new UserSessionActivityCommand(sessionId);

        await userSessionActivityHandler.HandleAsync(
            command,
            context.RequestAborted);

        await next(context);
    }
}

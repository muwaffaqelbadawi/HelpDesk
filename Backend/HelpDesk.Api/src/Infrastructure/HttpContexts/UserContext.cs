using System.Diagnostics;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.HttpContexts;

public sealed class UserContext(IHttpContextAccessor context) : IUserContext
{
    public string UserId
    {
        get
        {
            var userId = context.HttpContext?
                .User
                .FindFirstValue(ClaimTypes.NameIdentifier);

            return string.IsNullOrWhiteSpace(userId)
                ? throw new AuthenticationRequiredException()
                : userId;
        }
    }

    public Guid GuidUserId
    {
        get
        {
            return !Guid.TryParse(UserId, out var guid)
                ? throw new AuthenticationRequiredException()
                : guid;
        }
    }

    public Guid ToGuidId(string id)
    {
        return !Guid.TryParse(id, out var guid)
            ? throw new AuthenticationRequiredException()
            : guid;
    }

    public Guid SessionId
    {
        get
        {
            var sessionId = context.HttpContext?
                .User
                .FindFirstValue(JwtRegisteredClaimNames.Sid);

            return !Guid.TryParse(sessionId, out var guid)
                ? throw new AuthenticationRequiredException()
                : guid;
        }
    }

    public Guid JwtId
    {
        get
        {
            var jwtId = context.HttpContext?
                .User
                .FindFirstValue(JwtRegisteredClaimNames.Jti);

            return !Guid.TryParse(jwtId, out var guid)
                ? throw new AuthenticationRequiredException()
                : guid;
        }
    }

    public DateTimeOffset? JwtExpiresAt
    {
        get
        {
            var exp = context.HttpContext?
                .User
                .FindFirstValue(JwtRegisteredClaimNames.Exp);

            return long.TryParse(
                exp,
                NumberStyles.Integer,
                CultureInfo.InvariantCulture,
                out var unixSeconds)
                    ? DateTimeOffset.FromUnixTimeSeconds(unixSeconds)
                    : null;
        }
    }

    public string UserName
    {
        get
        {
            var userName =
                context.HttpContext?
                    .User
                    .Identity?
                    .Name;

            return string.IsNullOrWhiteSpace(userName)
                ? throw new AuthenticationRequiredException()
                : userName;
        }
    }

    public string? UserAgent =>
        context.HttpContext?
            .Request
            .Headers
            .UserAgent
            .ToString();

    public string? Browser =>
            UserAgent is not null ?
            UserAgent.Contains("Edg") ? "Edge" :
            UserAgent.Contains("Firefox") ? "Firefox" :
            UserAgent.Contains("Chrome") ? "Chrome" :
            UserAgent.Contains("Safari") ? "Safari" :
            "Unknown"
        : "Unknown";

    public string? IpAddress =>
       context.HttpContext?
           .Connection
           .RemoteIpAddress?
           .ToString();

    public string TraceId =>
        Activity.Current?.TraceId.ToString()
        ?? Guid.NewGuid().ToString();

    public string CorrelationId =>
        context.HttpContext?.TraceIdentifier
        ?? Guid.NewGuid().ToString();

    public bool IsAuthenticated =>
        context.HttpContext?
            .User
            .Identity?
            .IsAuthenticated
        ?? false;

    public bool HasClaims =>
        context
            .HttpContext?
            .User
            .Claims is null;
}

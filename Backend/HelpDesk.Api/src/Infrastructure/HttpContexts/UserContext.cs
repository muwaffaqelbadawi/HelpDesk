using System.Diagnostics;
using System.Security.Claims;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.HttpContexts;

public sealed class UserContext(IHttpContextAccessor httpContextAccessor)
    : IUserContext
{
    public string UserId
    {
        get
        {
            var userId = httpContextAccessor.HttpContext?
                .User
                .FindFirstValue(ClaimTypes.NameIdentifier);

            return string.IsNullOrWhiteSpace(userId)
                ? throw new UnauthorizedAccessException("Authenticated user not found.")
                : userId;
        }
    }

    public Guid GuidUserId
    {
        get
        {
            return !Guid.TryParse(UserId, out var guid)
                ? throw new UnauthorizedAccessException("Invalid user identifier.")
                : guid;
        }
    }

    public Guid ToGuidId(string id)
    {
        return !Guid.TryParse(id, out var guid)
            ? throw new UnauthorizedAccessException("Invalid user identifier.")
            : guid;
    }

    public string UserName
    {
        get
        {
            var userName =
                httpContextAccessor.HttpContext?
                    .User
                    .Identity?
                    .Name;

            return string.IsNullOrWhiteSpace(userName)
                ? throw new UnauthorizedAccessException("Authenticated user not found.")
                : userName;
        }
    }

    public string? UserAgent =>
        httpContextAccessor.HttpContext?
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
       httpContextAccessor.HttpContext?
           .Connection
           .RemoteIpAddress?
           .ToString();

    // for distributed tracing
    public string TraceId =>
        Activity.Current?.TraceId.ToString()
        ?? Guid.NewGuid().ToString();

    public string CorrelationId =>
        httpContextAccessor.HttpContext?.TraceIdentifier
        ?? Guid.NewGuid().ToString();

    public bool IsAuthenticated =>
        httpContextAccessor.HttpContext?
            .User
            .Identity?
            .IsAuthenticated
        ?? false;

    public bool HasClaims =>
        httpContextAccessor
            .HttpContext?
            .User
            .Claims is null;
}

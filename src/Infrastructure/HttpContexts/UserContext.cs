using System.Diagnostics;
using System.Security.Claims;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.HttpContexts;

public sealed class UserContext : IUserContext
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public UserContext(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public string UserId
    {
        get
        {
            var userId = _httpContextAccessor.HttpContext?
                .User
                .FindFirstValue(ClaimTypes.NameIdentifier);

            if (string.IsNullOrWhiteSpace(userId))
            {
                throw new UnauthorizedAccessException(
                "Authenticated user not found.");
            }

            return userId;
        }
    }

    public Guid GuidUserId
    {
        get
        {
            var value = _httpContextAccessor.HttpContext?
                .User
                .FindFirstValue(ClaimTypes.NameIdentifier);

            if (!Guid.TryParse(value, out var guid))
            {
                throw new UnauthorizedAccessException(
                    "Invalid user identifier.");
            }

            return guid;
        }
    }

    public Guid ToGuidId(string id)
    {
        if (!Guid.TryParse(id, out var guid))
        {
            throw new UnauthorizedAccessException(
                "Invalid user identifier.");
        }

        return guid;
    }

    public string UserName
    {
        get
        {
            var userName =
                _httpContextAccessor.HttpContext?
                    .User
                    .Identity?
                    .Name;

            if (string.IsNullOrWhiteSpace(userName))
            {
                throw new UnauthorizedAccessException(
                    "Authenticated user not found.");
            }

            return userName;
        }
    }

    public string? UserAgent =>
        _httpContextAccessor.HttpContext?
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
       _httpContextAccessor.HttpContext?
           .Connection
           .RemoteIpAddress?
           .ToString();

    public string TraceId =>
        Activity
        .Current?
        .TraceId
        .ToString()!;

    public string CorrelationId =>
        _httpContextAccessor
            .HttpContext?
            .TraceIdentifier!;

    public bool IsAuthenticated =>
        _httpContextAccessor.HttpContext?
            .User
            .Identity?
            .IsAuthenticated
        ?? false;

    public bool HasClaims =>
        _httpContextAccessor
            .HttpContext?
            .User
            .Claims is null;
}

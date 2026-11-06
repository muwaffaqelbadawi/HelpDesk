namespace HelpDesk.src.Shared.Interfaces;

public interface IUserContext
{
    // User context
    string UserId { get; }

    Guid GuidUserId { get; }

    Guid SessionId { get; }

    Guid JwtId { get; }

    DateTimeOffset? JwtExpiresAt { get; }

    string UserName { get; }

    bool IsAuthenticated { get; }

    bool HasClaims { get; }

    // Request/Connection/TraceIdentifier contexts
    string? UserAgent { get; }

    string? Browser { get; }

    string? IpAddress { get; }

    string TraceId { get; }

    string CorrelationId { get; }

    // Method
    Guid ToGuidId(string id);
}

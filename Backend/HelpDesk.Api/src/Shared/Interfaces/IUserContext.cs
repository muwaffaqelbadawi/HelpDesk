namespace HelpDesk.src.Shared.Interfaces;

public interface IUserContext
{
    string UserId { get; }

    Guid GuidUserId { get; }

    Guid ToGuidId(string id);

    string UserName { get; }

    string? UserAgent { get; }

    string? Browser { get; }

    string? IpAddress { get; }

    string TraceId { get; }

    string CorrelationId { get; }

    bool IsAuthenticated { get; }

    bool HasClaims { get; }
}

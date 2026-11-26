using HelpDesk.Features.Auth.RefreshToken;
using HelpDesk.Features.Auth.UserSession.Activity;

namespace HelpDesk.Infrastructure.Logging;

public static partial class AuthLogMessages
{
    [LoggerMessage(
        Level = LogLevel.Information,
        Message = "Session ID: {sessionId} UserId: {userId} SessionExpiration: {expiredAt} SessionRevocation: {revokedAt} Now: {utcNow} IsExpired: {isExpired} IsRevoked: {isRevoked}")]
    public static partial void RefreshTokenLog(
       this ILogger<RefreshTokenHandler> logger,
       Guid? sessionId,
       Guid userId,
       DateTimeOffset? expiredAt,
       DateTimeOffset? revokedAt,
       DateTimeOffset utcNow,
       bool isExpired,
       bool isRevoked);

    [LoggerMessage(
        Level = LogLevel.Information,
        Message = "Session ID: {sessionId} UserId: {userId} SessionExpiration {expiredAt} SessionRevocation: {revokedAt} Now: {utcNow} IsExpired: {isExpired} IsRevoked: {isRevoked}")]
    public static partial void UserSessionActivityLog(
       this ILogger<UserSessionActivityHandler> logger,
       Guid? sessionId,
       Guid userId,
       DateTimeOffset? expiredAt,
       DateTimeOffset? revokedAt,
       DateTimeOffset utcNow,
       bool isExpired,
       bool isRevoked);
}

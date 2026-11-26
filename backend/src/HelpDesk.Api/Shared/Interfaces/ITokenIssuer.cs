using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Infrastructure.Services.Jwt;

namespace HelpDesk.Shared.Interfaces;

public interface ITokenIssuer
{
    (string token, DateTimeOffset expiration) IssueAccessToken(
        ApplicationUser user,
        Guid sessionId);

    (string token, DateTimeOffset expiration) IssueRefreshToken(
        DateTimeOffset sessionExpiresAt);

    TokenResult IssueTokenObject(
        ApplicationUser user,
        Guid userSessionId,
        DateTimeOffset refreshTokenExpiresAt);

    ApplicationRefreshToken CreateRefreshTokenObject(
        ApplicationUser user,
        Guid userSessionId,
        TokenResult tokenResult);
}

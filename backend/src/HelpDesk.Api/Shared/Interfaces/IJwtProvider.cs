using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IJwtProvider
{
    string GenerateAccessToken(
        ApplicationUser user,
        Guid sessionId);
}

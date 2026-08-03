using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Auth.RefreshToken;

public sealed record RefreshTokenResponse(
    UserData UserData,
    IReadOnlyCollection<string> Roles,
    TokenResult Token);
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Auth.RefreshToken;

public sealed record RefreshTokenResponse(
    UserAccountData UserAccountData,
    TokenResult Token);
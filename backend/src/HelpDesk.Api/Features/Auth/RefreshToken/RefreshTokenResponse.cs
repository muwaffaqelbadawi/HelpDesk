using HelpDesk.Infrastructure.Services.Jwt;
using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Auth.RefreshToken;

public sealed record RefreshTokenResponse(
    UserAccountData UserAccountData,
    TokenResult Token);
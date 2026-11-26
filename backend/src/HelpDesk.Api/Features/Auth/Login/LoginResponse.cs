using HelpDesk.Infrastructure.Services.Jwt;
using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Auth.Login;

public sealed record LoginResponse(
    UserAccountData UserAccountData,
    TokenResult Token);

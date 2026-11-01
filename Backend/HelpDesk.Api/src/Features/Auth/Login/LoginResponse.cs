using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Auth.Login;

public sealed record LoginResponse(
    UserAccountData UserAccountData,
    TokenResult Token);

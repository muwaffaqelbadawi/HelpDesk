using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Auth.Login;

public sealed record LoginResponse(
    UserAccountData UserAccountData,
    TokenResult Token);

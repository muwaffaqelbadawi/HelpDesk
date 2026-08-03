using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Auth.Login;

public sealed record LoginResponse(
    UserData UserData,
    IReadOnlyCollection<string> Roles,
    TokenResult Token);

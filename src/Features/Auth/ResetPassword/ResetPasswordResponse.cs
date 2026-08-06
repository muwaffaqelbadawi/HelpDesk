using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Auth.ResetPassword;

public sealed record ResetPasswordResponse(
    UserAccountData UserAccountData,
    TokenResult Token);

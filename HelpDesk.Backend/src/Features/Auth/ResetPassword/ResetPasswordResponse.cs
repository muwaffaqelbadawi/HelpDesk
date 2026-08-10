using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Auth.ResetPassword;

public sealed record ResetPasswordResponse(
    UserAccountData UserAccountData,
    TokenResult Token);

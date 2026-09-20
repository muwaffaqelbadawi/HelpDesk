using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Auth.ResetPassword.Admin;

public sealed record AdminResetPasswordResponse(
    UserAccountData UserAccountData,
    TokenResult Token);

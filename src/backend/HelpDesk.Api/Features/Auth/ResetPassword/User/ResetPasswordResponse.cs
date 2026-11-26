using HelpDesk.Infrastructure.Services.Jwt;
using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Auth.ResetPassword.User;

public sealed record ResetPasswordResponse(
    UserAccountData UserAccountData,
    TokenResult Token);

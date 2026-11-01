using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed record ResetPasswordResponse(
    UserAccountData UserAccountData,
    TokenResult Token);

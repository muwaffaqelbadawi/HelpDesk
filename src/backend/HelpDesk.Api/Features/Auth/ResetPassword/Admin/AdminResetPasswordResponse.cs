using HelpDesk.Infrastructure.Services.Jwt;
using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Auth.ResetPassword.Admin;

public sealed record AdminResetPasswordResponse(
    UserAccountData UserAccountData,
    TokenResult Token);

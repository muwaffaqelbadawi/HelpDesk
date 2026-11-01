using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Auth.ResetPassword.Admin;

public sealed record AdminResetPasswordResponse(
    UserAccountData UserAccountData,
    TokenResult Token);

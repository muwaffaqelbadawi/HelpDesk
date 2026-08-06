using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed record ChangePasswordResponse(
   UserAccountData UserAccountData,
   TokenResult Token);
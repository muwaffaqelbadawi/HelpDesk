using HelpDesk.Infrastructure.Services.Jwt;

namespace HelpDesk.Features.Auth.ChangePassword;

public sealed record ChangePasswordResponse(TokenResult Token);
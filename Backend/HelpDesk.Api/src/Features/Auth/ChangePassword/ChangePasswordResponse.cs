using HelpDesk.src.Infrastructure.Services.Jwt;

namespace HelpDesk.src.Features.Auth.ChangePassword;

public sealed record ChangePasswordResponse(TokenResult Token);
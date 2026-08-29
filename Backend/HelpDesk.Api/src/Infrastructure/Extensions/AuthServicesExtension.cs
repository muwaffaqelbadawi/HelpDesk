using HelpDesk.src.Features.Auth.ChangePassword;
using HelpDesk.src.Features.Auth.ForgotPassword;
using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Features.Auth.Logout;
using HelpDesk.src.Features.Auth.RefreshToken;
using HelpDesk.src.Features.Auth.ResetPassword;
using HelpDesk.src.Features.Auth.RevokeToken;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class AuthServicesExtension
{
    public static IServiceCollection AddAuthServices(
        this IServiceCollection service)
    {
        // Register change password handler as a scoped service
        service.AddScoped<ICommandHandler<ChangePasswordCommand, ChangePasswordResponse>, ChangePasswordHandler>();

        // Register forgot password handler as a scoped service
        service.AddScoped<ICommandHandler<ForgotPasswordCommand, ForgotPasswordResponse>, ForgotPasswordHandler>();

        // Register login handler as a scoped service
        service.AddScoped<ICommandHandler<LoginCommand, LoginResponse>, LoginHandler>();

        // Register log out handler as a scoped service
        service.AddScoped<ICommandHandler<LogoutCommand, LogoutResponse>, LogoutHandler>();

        // Register RefreshTokenHandler as a scoped service
        service.AddScoped<ICommandHandler<RefreshTokenCommand, RefreshTokenResponse>, RefreshTokenHandler>();

        // Register reset password handler as a scoped service
        service.AddScoped<ICommandHandler<ResetPasswordCommand, ResetPasswordResponse>, ResetPasswordHandler>();

        // Register revoke token handler as a scoped service
        service.AddScoped<ICommandHandler<RevokeTokenCommand, RevokeTokenResponse>, RevokeTokenHandler>();

        return service;
    }
}

namespace HelpDesk.src.Infrastructure.Extensions;

public static class AuthServicesExtension
{
    public static IServiceCollection AddAuthServices(
        this IServiceCollection services)
    {
        // Register change password handler as a scoped service
        //services.AddScoped<ICommandHandler<ChangePasswordCommand, ChangePasswordResponse>, ChangePasswordHandler>();

        // Register forgot password handler as a scoped service
        //services.AddScoped<ICommandHandler<ForgotPasswordCommand, ForgotPasswordResponse>, ForgotPasswordHandler>();

        // Register login handler as a scoped service
        //services.AddScoped<ICommandHandler<LoginCommand, LoginResponse>, LoginHandler>();

        // Register log out handler as a scoped service
        //services.AddScoped<ICommandHandler<LogoutCommand, LogoutResponse>, LogoutHandler>();

        // Register RefreshTokenHandler as a scoped service
        //services.AddScoped<ICommandHandler<RefreshTokenCommand, RefreshTokenResponse>, RefreshTokenHandler>();

        // Register reset password handler as a scoped service
        //services.AddScoped<ICommandHandler<ResetPasswordCommand, ResetPasswordResponse>, ResetPasswordHandler>();

        // Register revoke token handler as a scoped service
        //services.AddScoped<ICommandHandler<RevokeTokenCommand, RevokeTokenResponse>, RevokeTokenHandler>();

        return services;
    }
}

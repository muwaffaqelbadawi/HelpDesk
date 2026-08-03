using HelpDesk.src.Features.Auth.ChangePassword;
using HelpDesk.src.Features.Auth.ForgotPassword;
using HelpDesk.src.Features.Auth.ForgotPassword.ResetForgottenPassword;
using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Features.Auth.Logout;
using HelpDesk.src.Features.Auth.RefreshToken;
using HelpDesk.src.Features.Auth.RevokeToken;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.User;

[ApiController]
[Route("api/auth")]
[Authorize]
public sealed class AuthController : ControllerBase
{
    //self-service actions
    // Require only that the user is authenticated no special permissions.

    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    private readonly ILogger<AuthController> _logger;

    public AuthController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService,
        ILogger<AuthController> logger)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    // Login
    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login(
        [FromServices] ICommandHandler<LoginCommand, LoginResponse> handler,
        [FromBody] LoginBody body,
        CancellationToken cancellationToken)
    {
        var command = new LoginCommand(
            body.Identity,
            body.Password);

        var result = await handler.HandleAsync(command, cancellationToken);

        // Set a new token cookies
        Response.SetTokenCookies(result.Token, _environment);

        // Return metadata only (no tokens in body)


        return Ok(new ApiResponse<LoginResponse>(
            message: "User logged successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }






    // Logout
    [HttpPost("logout")]
    public async Task<IActionResult> Logout(
        [FromServices] ICommandHandler<LogoutCommand, LogoutResponse> handler,
        [FromBody] LogoutBody body,
        CancellationToken cancellationToken)
    {
        var command = new LogoutCommand();

        var result = await handler.HandleAsync(command, cancellationToken);

        // Clear cookies
        Response.ClearTokenCookies();

        //_logger.LogInformation("logout Ref");

        return Ok(new ApiResponse<LogoutResponse>(
            message: "User logged out successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }






    // Refresh Token
    [HttpPost("refresh-token")]
    [AllowAnonymous]
    public async Task<IActionResult> RefreshToken(
        [FromServices] ICommandHandler<RefreshTokenCommand, RefreshTokenResponse> handler,
        CancellationToken cancellationToken)
    {
        // Read from cookie (no body needed)
        var refreshTokenValue = Request.Cookies["refresh_token"];

        _logger.LogInformation("refreshTokenValue: {refreshTokenValue}", refreshTokenValue);

        if (string.IsNullOrEmpty(refreshTokenValue))
        {
            return Unauthorized(new { Message = "No refresh token provided." });
        }

        // Create command from cookie value
        var command = new RefreshTokenCommand(refreshTokenValue);

        var result = await handler.HandleAsync(command, cancellationToken);

        // set new cookies
        Response.SetTokenCookies(result.Token, _environment);

        return Ok(new ApiResponse<RefreshTokenResponse>(
           message: "Token refreshed successfully.",
           time: _dateTimeService.UtcNow,
           data: result));
    }







    // Change Password
    [HttpPost("change-password")]
    public async Task<IActionResult> ChangePassword(
         [FromServices] ICommandHandler<ChangePasswordCommand, ChangePasswordResponse> handler,
         [FromBody] ChangePasswordBody body,
         CancellationToken cancellationToken)
    {
        // Create command from cookie value
        var command = new ChangePasswordCommand(
            body.CurrentPassword,
            body.NewPassword);

        var result = await handler.HandleAsync(command, cancellationToken);

        // Overwrite cookies with fresh tokens (keep session alive)
        Response.SetTokenCookies(result.Token, _environment);

        return Ok(new ApiResponse<UserData>(
           message: "Password changed successfully.",
           time: _dateTimeService.UtcNow,
           data: result.UserData));
    }





    // Forgot Password
    [HttpPost("forgot-password")]
    public async Task<IActionResult> ForgotPassword(
        [FromServices] ICommandHandler<ForgotPasswordCommand, ForgotPasswordResponse> handler,
        [FromBody] ForgotPasswordBody body,
        CancellationToken cancellationToken)
    {
        var command = new ForgotPasswordCommand(body.Email);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<UserData>(
           message: result.Message,
           time: _dateTimeService.UtcNow,
           data: null));
    }







    [HttpPost("reset-forgotten-password")]
    [AllowAnonymous]
    public async Task<IActionResult> ResetForgottenPassword(
    [FromServices] ICommandHandler<ResetForgottenPasswordCommand, ResetForgottenPasswordResponse> handler,
    [FromBody] ResetForgottenPasswordBody body,
    CancellationToken cancellationToken)
    {
        var command = new ResetForgottenPasswordCommand(
            body.UserId,
            body.Token,
            body.NewPassword);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<UserData>(
           message: "Password has been reset successfully.",
           time: _dateTimeService.UtcNow,
           data: result.UserData));
    }






    [HttpPost("revoke-token")]
    [AllowAnonymous]
    public async Task<IActionResult> RevokeTokens(

    [FromServices] ICommandHandler<RevokeTokenCommand, RevokeTokenResponse> handler,
    CancellationToken cancellationToken)
    {
        var command = new RevokeTokenCommand();

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<RevokeTokenResponse>(
            message: "All tokens revoked successfully.",
            time: _dateTimeService.UtcNow,
            data: result));
    }
}

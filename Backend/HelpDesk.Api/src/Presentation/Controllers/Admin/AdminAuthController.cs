using HelpDesk.src.Features.Auth.ResetPassword;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Admin;

[ApiController]
[Route("api/admin/auth")]
[Authorize]
public sealed class AdminAuthController : ControllerBase
{
    // Admin-level permission

    // Reset Password
    [Authorize(Policy = "Permission:Users.Reset-Password")]
    [HttpPost("users/{userId:guid}/reset-password", Name = "ResetPassword")]
    public async Task<IActionResult> ResetPassword(
        [FromServices] ICommandHandler<ResetPasswordCommand, ResetPasswordResponse> handler,
        [FromServices] IDateTimeService dateTimeService,
        [FromRoute] Guid userId,
        [FromBody] ResetPasswordBody body,
        CancellationToken cancellationToken)
    {
        var command = new ResetPasswordCommand(userId, body.NewPassword);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<UserAccountData>(
            message: ApiMessages.PasswordReset,
            time: dateTimeService,
            data: result.UserAccountData));
    }
}

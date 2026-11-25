using HelpDesk.src.Features.Auth.ResetPassword.Admin;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.SupperAdmin;

[ApiController]
[Route("api/admin/auth")]
[Authorize]
public sealed class AuthController(IDateTimeService dateTimeService) : ControllerBase
{
    // Role: "SuperAdmin"

    // ResetPassword
    [Authorize(Policy = "Permission:Auth.Reset-Password")]
    [HttpPost("users/{userId:guid}/reset-password")]
    public async Task<IActionResult> AdminResetPassword(
        [FromServices] ICommandHandler<AdminResetPasswordCommand, AdminResetPasswordResponse> handler,
        [FromRoute] Guid userId,
        [FromBody] AdminResetPasswordBody body,
        CancellationToken cancellationToken)
    {
        var command = new AdminResetPasswordCommand(userId, body.NewPassword);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<UserAccountData>(
            message: ApiMessages.PasswordReset,
            time: dateTimeService,
            data: result.UserAccountData));
    }
}

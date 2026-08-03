using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Auth.ResetPassword;

public sealed record ResetPasswordResponse(
    UserData UserData);

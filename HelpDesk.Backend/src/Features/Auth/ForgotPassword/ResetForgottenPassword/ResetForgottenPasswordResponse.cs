using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Auth.ForgotPassword.ResetForgottenPassword;

public sealed record class ResetForgottenPasswordResponse(
    UserAccountData UserAccountData);

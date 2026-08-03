using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Auth.ForgotPassword.ResetForgottenPassword;

public sealed record class ResetForgottenPasswordResponse(
    UserData UserData);

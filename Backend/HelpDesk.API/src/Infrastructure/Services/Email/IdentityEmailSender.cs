using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class IdentityEmailSender(IEmailService emailSender) : IEmailSender<ApplicationUser>
{
    public Task SendPasswordResetLinkAsync(
        ApplicationUser user,
        string email,
        string resetLink)
    {
        return emailSender.SendPasswordResetLinkAsync(
            user.UserName ?? "User",
            email,
            resetLink,
            CancellationToken.None);
    }

    public Task SendConfirmationLinkAsync(
        ApplicationUser user,
        string email,
        string confirmationLink)
    {
        return emailSender.SendConfirmationLinkAsync(
            user.UserName ?? "User",
            email,
            confirmationLink,
            CancellationToken.None);
    }

    public Task SendPasswordResetCodeAsync(
        ApplicationUser user,
        string email,
        string resetCode)
    {
        return emailSender.SendPasswordResetCodeAsync(
            user.UserName ?? "User",
            email,
            resetCode,
            CancellationToken.None);
    }
}

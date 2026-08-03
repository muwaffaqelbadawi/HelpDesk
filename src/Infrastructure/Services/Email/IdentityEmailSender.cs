using Microsoft.AspNetCore.Identity;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class IdentityEmailSender : IEmailSender<ApplicationUser>
{
    private readonly IEmailService _emailSender;

    public IdentityEmailSender(IEmailService emailSender)
    {
        _emailSender = emailSender;
    }

    public Task SendPasswordResetLinkAsync(
        ApplicationUser user,
        string email,
        string resetLink)
    {
        return _emailSender.SendPasswordResetLinkAsync(
            user.Id,
            user.UserName,
            email,
            resetLink,
            CancellationToken.None);
    }

    public Task SendConfirmationLinkAsync(
        ApplicationUser user,
        string email,
        string confirmationLink)
    {
        return _emailSender.SendConfirmationLinkAsync(
            user.Id,
            user.UserName,
            email,
            confirmationLink,
            CancellationToken.None);
    }

    public Task SendPasswordResetCodeAsync(
        ApplicationUser user,
        string email,
        string resetCode)
    {
        return _emailSender.SendPasswordResetCodeAsync(
            user.Id,
            user.UserName,
            email,
            resetCode,
            CancellationToken.None);
    }
}

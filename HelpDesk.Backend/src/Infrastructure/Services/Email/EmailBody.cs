using HelpDesk.src.Infrastructure.Services.Email.EmailTypes;

namespace HelpDesk.src.Infrastructure.Services.Email;

public static class EmailBody
{
    public const string TesEmail = """
            <h2>🎉 Mailpit is working!</h2>

            <p>Your HelpDesk email service is configured correctly.</p>

            <hr/>

            <p>If you can read this email, MailKit + Mailpit are working successfully.</p>
        """;

    public const string WelcomeEmail = """
        <h2>🎉 Welcome to HelpDesk!</h2>
        
        <p>Hello <strong>{FullEnName}</strong>,</p>
        
        <p>Your HelpDesk account has been created successfully.</p>
        
        <p>Here are your temporary login credentials:</p>
        
        <hr/>
        
        <p>
            <strong>Username:</strong> {UserName}<br/>
            <strong>Temporary Password:</strong> {tempPassword}
        </p>
        
        <p>
            For security reasons, you must change your password
            when you sign in for the first time.
        </p>
        
        <p>
            Please do not share this password with anyone.
        </p>
        
        <hr/>
        
        <p>Welcome to the team! 🫡</p>
        
        <p>
            <strong>HelpDesk Team</strong>
        </p>
        """;

    public static string RenderWelcomeEmail(
        WelcomeEmailData data)
    {
        return WelcomeEmail
            .Replace("{FullEnName}", data.FullName)
            .Replace("{UserName}", data.UserName)
            .Replace("{tempPassword}", data.TempPassword);
    }
}

namespace HelpDesk.src.Infrastructure.Services.Email.EmailTypes;

public sealed record WelcomeEmailData(
    string FullName,
    string UserName,
    string TempPassword);

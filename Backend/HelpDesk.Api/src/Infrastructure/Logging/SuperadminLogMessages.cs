namespace HelpDesk.src.Infrastructure.Logging;

public static partial class SuperadminLogMessages
{
    [LoggerMessage(
    EventId = 1004,
    Level = LogLevel.Information,
    Message = "Message: {message} UserId: {userId} UserName: {userName} Email: {email} MustChangePassword: {mustChangePassword} Roles: {roles}")]
    public static partial void SuperadminCreatedLog(
        this ILogger logger,
        string message,
        Guid userId,
        string userName,
        string email,
        bool mustChangePassword,
        IEnumerable<string> roles);
}

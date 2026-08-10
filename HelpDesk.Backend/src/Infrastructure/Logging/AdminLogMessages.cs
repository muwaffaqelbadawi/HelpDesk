namespace HelpDesk.src.Infrastructure.Logging;

public static partial class AdminLogMessages
{
    [LoggerMessage(
    EventId = 1004,
    Level = LogLevel.Information,
    Message = "Message: {message} UserId: {userId} UserName: {userName} Email: {email} MustChangePassword: {mustChangePassword} Roles: {roles} TempPassword: {tempPassword}")]
    public static partial void AdminCreatedLog(
    this ILogger logger,
    string message,
    Guid userId,
    string userName,
    string email,
    bool mustChangePassword,
    IEnumerable<string> roles,
    string tempPassword);
}

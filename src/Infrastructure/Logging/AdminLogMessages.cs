using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Infrastructure.Logging;

public static partial class AdminLogMessages
{
    [LoggerMessage(
        EventId = 1004,
        Level = LogLevel.Information,
        Message = "Message: {message} AdminData: {adminData} Roles: {roles} TempPassword: {tempPassword}")]
    public static partial void AdminCreatedLog(
       this ILogger logger,
       string message,
       AdminData adminData,
       IReadOnlyCollection<string> roles,
       string tempPassword);
}

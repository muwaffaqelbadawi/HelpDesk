using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Infrastructure.Logging;

public static partial class UserLogMessages
{
    [LoggerMessage(
        EventId = 1003,
        Level = LogLevel.Information,
        Message = "Message: {message} UserAccountData: {userAccountData} Roles: {roles} TempPassword: {tempPassword}")]
    public static partial void UserCreatedLog(
       this ILogger logger,
       string message,
       UserAccountData userAccountData,
       IReadOnlyCollection<string> roles,
       string tempPassword);
}

namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public enum UserHistoryType
{
    Created,
    Updated,
    PasswordChanged,
    PasswordReset,
    LoggedIn,
    LoggedOut,
    RoleChanged,
}

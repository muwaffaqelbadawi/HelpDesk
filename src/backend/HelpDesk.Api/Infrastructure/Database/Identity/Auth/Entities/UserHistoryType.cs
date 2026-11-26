namespace HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

public enum UserHistoryType
{
    Created,
    Updated,
    Deleted,
    PasswordChanged,
    PasswordReset,
    LoggedIn,
    LoggedOut,
    RoleChanged,
}

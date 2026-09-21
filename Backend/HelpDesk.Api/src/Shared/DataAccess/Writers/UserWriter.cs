using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Shared.DataAccess.Writers;

public sealed class UserWriter(AppDbContext dbContext)
    : IUserWriter
{
    public async Task WriteAsync(
        Guid userId,
        UserHistoryType type,
        DateTimeOffset occurredAt,
        CancellationToken cancellationToken = default)
    {
        var userHistory = new ApplicationUserHistory
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            Type = type,
            Description = type switch
            {
                UserHistoryType.Created => "User created",
                UserHistoryType.Updated => "User updated",
                UserHistoryType.PasswordChanged => "Password changed",
                UserHistoryType.PasswordReset => "Password reset",
                UserHistoryType.LoggedIn => "User logged in",
                UserHistoryType.LoggedOut => "User logged out",
                UserHistoryType.RoleChanged => "User role changed",
                _ => null
            },

            OccurredAt = occurredAt
        };

        dbContext.UserHistories.Add(userHistory);

        await dbContext.SaveChangesAsync(cancellationToken);
    }
}

using HelpDesk.src.Shared.Histories.HistoryTypes;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Shared.Histories.Writers;

public sealed class UserWriter : IUserWriter
{
    public void WriteAsync(
        Guid userId,
        UserHistoryTypes type,
        DateTimeOffset occurredAt,
        CancellationToken cancellationToken = default)
    {
        //dbContext.UserHistories.Add(userHistory);

        //await dbContext.SaveChangesAsync(cancellationToken);
    }
}

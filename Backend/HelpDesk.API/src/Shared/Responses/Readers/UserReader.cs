using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.Responses.Readers;

public sealed class UserReader : IUserReader
{
    private readonly AppDbContext _dbContext;

    public UserReader(
        AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        // User reader
        return await _dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == userId)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);
    }
}

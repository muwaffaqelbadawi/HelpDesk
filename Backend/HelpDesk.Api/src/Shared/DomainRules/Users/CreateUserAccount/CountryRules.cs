using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DomainRules.Users.CreateUserAccount;

public sealed class CountryRules(AppDbContext dbContext)
    : ICountryRules
{
    public async Task<bool> IsActiveAsync(
        Guid countryId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Countries
            .AnyAsync(x => x.Id == countryId && x.IsActive,
                cancellationToken);
    }
}

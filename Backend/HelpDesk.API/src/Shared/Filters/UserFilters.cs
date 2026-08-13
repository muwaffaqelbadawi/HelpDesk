using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Shared.Filters;

public sealed class UserFilters
{
    private readonly ILookupNormalizer _normalizer;

    public UserFilters(
        ILookupNormalizer normalizer)
    {
        _normalizer = normalizer;
    }
}

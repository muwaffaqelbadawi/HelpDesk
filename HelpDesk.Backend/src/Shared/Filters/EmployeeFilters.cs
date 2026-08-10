using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Shared.Filters;

public sealed class EmployeeFilters
{
    private readonly ILookupNormalizer _normalizer;

    public EmployeeFilters(
        ILookupNormalizer normalizer)
    {
        _normalizer = normalizer;
    }


}

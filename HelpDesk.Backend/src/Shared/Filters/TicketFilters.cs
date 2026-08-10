using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Shared.Filters;

public sealed class TicketFilters
{
    private readonly ILookupNormalizer _normalizer;

    public TicketFilters(
        ILookupNormalizer normalizer)
    {
        _normalizer = normalizer;
    }
}

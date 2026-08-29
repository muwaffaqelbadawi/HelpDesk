namespace HelpDesk.src.Shared.Queries;

public sealed record GetTicketsQuery
{
    // pagination parameters
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 10;


    // search logic (e.g., by name, email, etc.)
    public string? Search { get; init; }

    // Sorting logic (e.g., by name, email, etc.)
    public string? SortBy { get; init; }
    public string? SortDirection { get; init; }

    // Filtering by status (e.g., Active, Inactive, etc.)
    public string? Status { get; init; }

    public int Offset => (PageNumber - 1) * PageSize;

    public GetTicketsQuery(
        int pageNumber = 1,
        int pageSize = 10)
    {
        ArgumentOutOfRangeException.ThrowIfLessThan(pageNumber, 1);
        ArgumentOutOfRangeException.ThrowIfLessThan(pageSize, 1);

        PageNumber = pageNumber;
        PageSize = pageSize;
    }
}

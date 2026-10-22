namespace HelpDesk.src.Shared.Pagination;

public sealed record QueryParameters
{
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 10;
    public int Offset => (PageNumber - 1) * PageSize;
    public string? Search { get; init; }
    public string? SortBy { get; init; }
    public string? SortDirection { get; init; }
    public string? Status { get; init; }
}

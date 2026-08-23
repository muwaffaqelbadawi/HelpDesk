namespace HelpDesk.src.Shared.Pagination;

public sealed record PagedQuery
{
    public int PageNumber { get; set; }
    public int PageSize { get; set; }

    public int Offset => (PageNumber - 1) * PageSize;


    public PagedQuery(int pageNumber = 1, int pageSize = 10)
    {
        ArgumentOutOfRangeException.ThrowIfLessThan(pageNumber, 1);

        ArgumentOutOfRangeException.ThrowIfLessThan(pageSize, 1);

        PageNumber = pageNumber;

        PageSize = pageSize;
    }
}

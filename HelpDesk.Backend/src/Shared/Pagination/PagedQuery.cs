namespace HelpDesk.src.Shared.Pagination;

public sealed record PagedQuery(int PageNumber = 1, int PageSize = 10);

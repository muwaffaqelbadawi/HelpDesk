namespace HelpDesk.src.Shared.Pagination;

public static class TotalPages
{
    public static int Calculate(int totalCount, int pageSize)
    {
        return (int)Math.Ceiling(totalCount / (double)pageSize);
    }
}

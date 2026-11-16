using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.src.Features.Users.GetAll;

public sealed record GetAllUsersResponse(
    PagedResult<UserAccountData> PagedResult);

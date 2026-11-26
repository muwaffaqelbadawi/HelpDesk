using HelpDesk.Shared.DataAccess.Dtos;
using HelpDesk.Shared.Pagination;

namespace HelpDesk.Features.Users.GetAll;

public sealed record GetAllUsersResponse(
    PagedResult<UserAccountData> PagedResult);

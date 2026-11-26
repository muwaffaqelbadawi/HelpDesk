using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Users.GetById;

public sealed record GetByIdUserResponse(
    UserAccountData UserAccountData);

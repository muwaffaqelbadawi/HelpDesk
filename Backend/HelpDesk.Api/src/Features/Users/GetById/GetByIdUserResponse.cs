using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Users.GetById;

public sealed record GetByIdUserResponse(
    UserAccountData UserAccountData);

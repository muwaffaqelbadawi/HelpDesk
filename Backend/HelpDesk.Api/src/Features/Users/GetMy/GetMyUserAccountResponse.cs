using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Users.GetMy;

public sealed record GetMyUserAccountResponse(
    UserAccountData UserAccountData);
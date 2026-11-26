using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Users.GetMy;

public sealed record GetMyUserAccountResponse(
    UserAccountData UserAccountData);
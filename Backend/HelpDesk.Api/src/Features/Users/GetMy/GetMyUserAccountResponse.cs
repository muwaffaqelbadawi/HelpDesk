using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Users.GetMy;

public sealed record GetMyUserAccountResponse(
    UserAccountData UserAccountData);
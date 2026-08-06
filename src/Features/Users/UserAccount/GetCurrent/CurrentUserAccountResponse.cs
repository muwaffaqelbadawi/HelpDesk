using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Users.UserAccount.GetCurrent;

public sealed record CurrentUserAccountResponse(
    UserAccountData UserAccountData);
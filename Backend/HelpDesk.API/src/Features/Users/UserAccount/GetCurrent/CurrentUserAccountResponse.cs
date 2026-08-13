using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Users.UserAccount.GetCurrent;

public sealed record CurrentUserAccountResponse(
    UserAccountData UserAccountData);
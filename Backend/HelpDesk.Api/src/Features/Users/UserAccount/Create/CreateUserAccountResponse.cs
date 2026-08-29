using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Users.UserAccount.Create;

public sealed record CreateUserAccountResponse(
    UserAccountData UserAccountData);
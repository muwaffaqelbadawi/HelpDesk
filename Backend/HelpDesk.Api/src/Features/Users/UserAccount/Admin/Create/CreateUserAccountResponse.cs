using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Users.UserAccount.Admin.Create;

public sealed record CreateUserAccountResponse(
    UserAccountData UserAccountData);
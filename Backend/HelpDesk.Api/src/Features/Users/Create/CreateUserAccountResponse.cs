using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Users.Create;

public sealed record CreateUserAccountResponse(
    UserAccountData UserAccountData);
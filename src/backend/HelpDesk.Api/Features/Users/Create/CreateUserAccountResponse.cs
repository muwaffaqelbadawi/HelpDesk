using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Users.Create;

public sealed record CreateUserAccountResponse(
    UserAccountData UserAccountData);
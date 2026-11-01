using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Users.Create;

public sealed record CreateUserAccountResponse(
    UserAccountData UserAccountData);
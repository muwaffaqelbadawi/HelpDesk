using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Users.UserAccount.GetAll;

public sealed record GetUsersAccountResponse(
    UserAccountData UserAccountData);
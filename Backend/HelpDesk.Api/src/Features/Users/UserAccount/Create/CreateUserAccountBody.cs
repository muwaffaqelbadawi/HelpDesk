namespace HelpDesk.src.Features.Users.UserAccount.Create;

public sealed record CreateUserAccountBody(
    string UserName,
    string Email,
    string PhoneNumber,
    string FullEnName,
    string FullArName,
    string JobTitle,
    Guid DepartmentId,
    Guid SectorId,
    Guid CountryId);
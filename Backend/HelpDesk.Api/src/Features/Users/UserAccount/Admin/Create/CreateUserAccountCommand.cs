namespace HelpDesk.src.Features.Users.UserAccount.Admin.Create;

public sealed record class CreateUserAccountCommand(
    string UserName,
    string Email,
    string PhoneNumber,
    string FullEnName,
    string FullArName,
    string JobTitle,
    Guid DepartmentId,
    Guid SectorId,
    Guid CountryId);

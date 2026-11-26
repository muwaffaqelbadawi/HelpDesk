using HelpDesk.Features.Users.Create;

namespace HelpDesk.Tests.Unit.TestData;

public static class UserTestData
{
    public static CreateUserAccountCommand CreateUserCommand(Guid countryId)
    {
        var uniqueId = Guid.NewGuid().ToString("N")[..10];

        return new CreateUserAccountCommand(
            UserName: $"testuser-{uniqueId}",
            Email: $"testuser-{uniqueId}@example.com",
            FullEnName: $"Test User {uniqueId}",
            FullArName: $"مستخدم اختبار {uniqueId}");
    }
}

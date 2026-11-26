using HelpDesk.Features.Users.Create;

namespace HelpDesk.Tests.Integration.TestData;

public static class TestUser
{
    public static CreateUserAccountCommand CreateUserCommand()
    {
        var uniqueId = Guid.NewGuid().ToString("N")[..10];

        return new CreateUserAccountCommand(
            UserName: $"testuser-{uniqueId}",
            Email: $"testuser-{uniqueId}@example.com",
            FullEnName: $"Test User {uniqueId}",
            FullArName: $"مستخدم اختبار {uniqueId}");
    }
}

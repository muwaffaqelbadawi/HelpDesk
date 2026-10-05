using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.Tests.Integration.TestData;

public sealed class UserContextTestData : IUserContext
{
    public string UserId => GuidUserId.ToString();

    public Guid GuidUserId { get; set; }

    public Guid ToGuidId(string id) => Guid.Parse(id);

    public Guid SessionId { get; }

    public string UserName => "integration-test";

    public string? UserAgent => "IntegrationTest";

    public string? Browser => "IntegrationTest";

    public string? IpAddress => "127.0.0.1";

    public string TraceId => "integration-test";

    public string CorrelationId => "integration-test";

    public bool IsAuthenticated => true;

    public bool HasClaims => true;
}

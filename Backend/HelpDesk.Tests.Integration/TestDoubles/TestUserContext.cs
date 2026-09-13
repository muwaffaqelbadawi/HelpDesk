using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.Tests.Integration.TestDoubles;

public sealed class TestUserContext : IUserContext
{
    public string UserId => GuidUserId.ToString();

    public Guid GuidUserId { get; set; }

    public string UserName => "integration-test";

    public string? UserAgent => "IntegrationTest";

    public string? Browser => "IntegrationTest";

    public string? IpAddress => "127.0.0.1";

    public string TraceId => "integration-test";

    public string CorrelationId => "integration-test";

    public bool IsAuthenticated => true;

    public bool HasClaims => true;

    public Guid ToGuidId(string id) => Guid.Parse(id);
}

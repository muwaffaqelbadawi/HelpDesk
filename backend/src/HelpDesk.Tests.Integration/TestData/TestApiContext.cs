using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Tests.Integration.TestData;

public sealed class TestApiContext : IApiContext
{
    public string BaseUrl => "https://localhost:7082/test";
}

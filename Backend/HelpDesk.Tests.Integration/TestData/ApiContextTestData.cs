using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.Tests.Integration.TestData;

public sealed class ApiContextTestData : IApiContext
{
    public string BaseUrl => "https://localhost:7082/test";
}

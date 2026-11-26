using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.HttpContexts;

public sealed class ApiContext(IHttpContextAccessor context) : IApiContext
{
    public string BaseUrl =>
        $"{context.HttpContext?.Request.Scheme}://{context.HttpContext?.Request.Host}/api";
}

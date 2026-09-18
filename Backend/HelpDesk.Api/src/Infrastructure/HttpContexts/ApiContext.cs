using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.HttpContexts;

public class ApiContext(IHttpContextAccessor context) : IApiContext
{
    public string BaseUrl =>
        $"{context.HttpContext?.Request.Scheme}://{context.HttpContext?.Request.Host}/api";
}

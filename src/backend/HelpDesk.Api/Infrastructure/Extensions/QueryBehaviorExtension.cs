using HelpDesk.Infrastructure.Behaviors;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Extensions;

public static class QueryBehaviorExtension
{
    public static WebApplicationBuilder AddQueryHandlerBehavior(
        this WebApplicationBuilder builder)
    {
        // validation behavior
        builder.Services.AddScoped(
            typeof(IQueryHandlerBehavior<,>),
            typeof(QueryValidationBehavior<,>));

        return builder;
    }
}

using HelpDesk.src.Infrastructure.Behaviors;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

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

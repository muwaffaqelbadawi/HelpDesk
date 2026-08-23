using HelpDesk.src.Infrastructure.Events;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class EventsExtension
{
    public static WebApplicationBuilder AddEvents(
        this WebApplicationBuilder builder)
    {
        // Register DomainEventDispatcher as scoped service
        builder.Services.AddScoped<IDomainEventDispatcher, DomainEventDispatcher>();

        return builder;
    }
}

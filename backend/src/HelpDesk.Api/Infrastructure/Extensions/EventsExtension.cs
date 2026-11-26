using HelpDesk.Shared.Events.DomainEvents;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Extensions;

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

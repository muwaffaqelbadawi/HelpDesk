using HelpDesk.src.Shared.AssemblyMarker;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class ScrutorRegistrationExtension
{
    public static WebApplicationBuilder AddScrutorRegistration(
        this WebApplicationBuilder builder)
    {
        // 1- Register ICommandHandler<in TCommand>
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes
                .AssignableTo(typeof(ICommandHandler<>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        // 2- Register ICommandHandler<in TCommand, TResponse>
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes
                .AssignableTo(typeof(ICommandHandler<,>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        // 3- Register IQueryHandler<TResult>
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes
                .AssignableTo(typeof(IQueryHandler<>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        // 4- Register IQueryHandler<in TQuery, TResult>
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes
                .AssignableTo(typeof(IQueryHandler<,>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        // 5- Register IDomainEventHandler<TEvent>
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes
                .AssignableTo(typeof(IDomainEventHandler<>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        return builder;
    }
}

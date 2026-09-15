using HelpDesk.src.Infrastructure.PipeLines;
using HelpDesk.src.Shared.AssemblyMarker;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class ScrutorExtension
{
    public static WebApplicationBuilder AddCommandHandler(
        this WebApplicationBuilder builder)
    {
        // Register ICommandHandler<in TCommand>
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes.AssignableTo(typeof(ICommandHandler<>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        // Register ICommandHandler<in TCommand, TResponse>
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes.AssignableTo(typeof(ICommandHandler<,>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        return builder;
    }

    public static WebApplicationBuilder AddQueryHandler(
        this WebApplicationBuilder builder)
    {
        // Register IQueryHandler<TResult>
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes.AssignableTo(typeof(IQueryHandler<>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        // Register IQueryHandler<in TQuery, TResult>
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes.AssignableTo(typeof(IQueryHandler<,>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        return builder;
    }

    public static WebApplicationBuilder AddScrutorDecorate(
        this WebApplicationBuilder builder)
    {
        builder.Services.Decorate(
            typeof(ICommandHandler<>),
            typeof(CommandPipeline<>));

        builder.Services.Decorate(
            typeof(ICommandHandler<,>),
            typeof(CommandPipeline<,>));

        return builder;
    }

    public static WebApplicationBuilder AddDomainEventHandler(
        this WebApplicationBuilder builder)
    {
        // Register IDomainEventHandler<TEvent>
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes.AssignableTo(typeof(IDomainEventHandler<>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        return builder;
    }

    public static WebApplicationBuilder AddDataSeeder(
        this WebApplicationBuilder builder)
    {
        // Register IDataSeeder
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes.AssignableTo<ISeederService>())
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        return builder;
    }

    public static WebApplicationBuilder AddScrutor(
        this WebApplicationBuilder builder)
    {
        builder
            .AddCommandHandler()
            .AddQueryHandler()
            .AddScrutorDecorate()
            .AddDomainEventHandler()
            .AddDataSeeder();

        return builder;
    }
}

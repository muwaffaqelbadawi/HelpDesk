using HelpDesk.src.Infrastructure.PipeLines;
using HelpDesk.src.Shared.AssemblyMarker;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class ScrutorExtension
{
    public static WebApplicationBuilder AddCommandHandler(
        this WebApplicationBuilder builder)
    {
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes.AssignableTo(typeof(ICommandHandler<>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

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
        builder.Services.Scan(scan => scan
            .FromAssemblyOf<ApplicationAssemblyMarker>()
            .AddClasses(classes => classes.AssignableTo(typeof(IQueryHandler<>)))
            .AsImplementedInterfaces()
            .WithScopedLifetime());

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
            typeof(CommandHandlerPipeline<>));

        builder.Services.Decorate(
            typeof(ICommandHandler<,>),
            typeof(CommandHandlerPipeline<,>));

        builder.Services.Decorate(
            typeof(IQueryHandler<>),
            typeof(QueryHandlerPipeline<>));

        builder.Services.Decorate(
            typeof(IQueryHandler<,>),
            typeof(QueryHandlerPipeline<,>));

        return builder;
    }

    public static WebApplicationBuilder AddDomainEventHandler(
        this WebApplicationBuilder builder)
    {
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

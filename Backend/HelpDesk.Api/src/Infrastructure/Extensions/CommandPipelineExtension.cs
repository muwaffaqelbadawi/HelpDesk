using FluentValidation;
using HelpDesk.src.Infrastructure.Behaviors;
using HelpDesk.src.Infrastructure.PipeLines;
using HelpDesk.src.Shared.AssemblyMarker;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class CommandPipelineExtension
{
    public static WebApplicationBuilder AddCommandPipeline(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddScoped(
            typeof(ICommandBehavior<>),
            typeof(ValidationBehavior<>));

        builder.Services.AddScoped(
            typeof(ICommandBehavior<,>),
            typeof(ValidationBehavior<,>));

        builder.Services.AddValidatorsFromAssemblyContaining<ApplicationAssemblyMarker>();

        return builder;
    }

    public static WebApplicationBuilder AddCommandPipeline<TCommand, THandler>(
        this WebApplicationBuilder builder)
        where THandler : class, ICommandHandler<TCommand>
    {
        builder.Services.AddScoped<THandler>();

        builder.Services.AddScoped<ICommandHandler<TCommand>>(sp =>
        {
            var handler = sp.GetRequiredService<THandler>();

            var behaviors =
                sp.GetServices<ICommandBehavior<TCommand>>();

            return new CommandPipeline<TCommand>(
                handler,
                behaviors);
        });

        return builder;
    }

    public static WebApplicationBuilder AddCommandPipeline<
        TCommand,
        TResponse,
        THandler>(
        this WebApplicationBuilder builder)
        where THandler : class, ICommandHandler<TCommand, TResponse>
    {
        builder.Services.AddScoped<THandler>();

        builder.Services.AddScoped<ICommandHandler<TCommand, TResponse>>(sp =>
        {
            var handler =
                sp.GetRequiredService<THandler>();

            var behaviors =
                sp.GetServices<
                    ICommandBehavior<TCommand, TResponse>>();

            return new CommandPipeline<TCommand, TResponse>(
                handler,
                behaviors);
        });

        return builder;
    }
}

using FluentValidation;
using HelpDesk.src.Infrastructure.Behaviors;
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
}

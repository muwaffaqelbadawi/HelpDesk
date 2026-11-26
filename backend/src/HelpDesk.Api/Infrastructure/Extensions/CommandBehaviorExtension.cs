using FluentValidation;
using HelpDesk.Infrastructure.Behaviors;
using HelpDesk.Shared.AssemblyMarker;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Extensions;

public static class CommandBehaviorExtension
{
    public static WebApplicationBuilder AddCommandHandlerBehavior(
        this WebApplicationBuilder builder)
    {
        // Validation behavior
        builder.Services.AddScoped(
            typeof(ICommandHandlerBehavior<>),
            typeof(ValidationBehavior<>));

        builder.Services.AddScoped(
            typeof(ICommandHandlerBehavior<,>),
            typeof(ValidationBehavior<,>));

        // Password reset behavior
        builder.Services.AddScoped(
            typeof(ICommandHandlerBehavior<>),
            typeof(PasswordResetBehavior<>));

        builder.Services.AddScoped(
            typeof(ICommandHandlerBehavior<,>),
            typeof(PasswordResetBehavior<,>));

        builder.Services.AddValidatorsFromAssemblyContaining<ApplicationAssemblyMarker>();

        return builder;
    }
}

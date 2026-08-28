using FluentValidation;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Behaviors;

public sealed class ValidationBehavior<TCommand, TResponse>(
    IEnumerable<IValidator<TCommand>> validators)
        : ICommandBehavior<TCommand, TResponse>
{
    public async Task<TResponse> HandleAsync(
        TCommand command,
        Func<Task<TResponse>> next,
        CancellationToken cancellationToken)
    {
        if (!validators.Any())
        {
            return await next();
        }

        var context = new ValidationContext<TCommand>(command);

        var results = await Task.WhenAll(
            validators.Select(
                validator => validator.ValidateAsync(context, cancellationToken)));

        var failures = results
            .SelectMany(result => result.Errors)
            .Where(failure => failure is not null)
            .ToList();

        if (failures.Count > 0)
        {
            throw new ValidationException(failures);
        }

        return await next();
    }
}

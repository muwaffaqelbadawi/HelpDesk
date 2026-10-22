using FluentValidation;
using FluentValidation.Results;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Behaviors;

public sealed class ValidationBehavior<TCommand>(
    IEnumerable<IValidator<TCommand>> validators)
        : ICommandHandlerBehavior<TCommand>
{
    public async Task HandleAsync(
        TCommand command,
        Func<Task> next,
        CancellationToken cancellationToken)
    {
        var context = new ValidationContext<TCommand>(command);

        var results = await Task.WhenAll(
            validators.Select(
                validator => validator.ValidateAsync(
                    context,
                    cancellationToken)));

        var failures = results
            .SelectMany(result => result.Errors)
            .Where(failure => failure is not null)
            .ToList();

        if (failures.Count > 0)
            throw new ValidationException(failures);

        await next();
    }
}

public sealed class ValidationBehavior<TCommand, TResponse>(
    IEnumerable<IValidator<TCommand>> validators)
        : ICommandHandlerBehavior<TCommand, TResponse>
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

        return failures.Count > 0
            ? throw new ValidationException(failures)
            : await next();
    }
}

public sealed class QueryValidationBehavior<TQuery, TResult>(
    IEnumerable<IValidator<TQuery>> validators)
    : IQueryHandlerBehavior<TQuery, TResult>
{
    public async Task<TResult> HandleAsync(
        TQuery query,
        Func<Task<TResult>> next,
        CancellationToken cancellationToken)
    {
        var context = new ValidationContext<TQuery>(query);

        var failures = new List<ValidationFailure>();

        foreach (var validator in validators)
        {
            var result = await validator.ValidateAsync(
                context,
                cancellationToken);

            failures.AddRange(result.Errors);
        }

        return failures.Count > 0
            ? throw new ValidationException(failures)
            : await next();
    }
}

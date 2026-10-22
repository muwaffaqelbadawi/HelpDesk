using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Mvc;
using FluentValidationException = FluentValidation.ValidationException;

namespace HelpDesk.src.Infrastructure.Middleware;

public sealed class ExceptionMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(
        HttpContext context,
        IApiContext apiContext,
        IUserContext userContext)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
            context.Response.StatusCode = ex switch
            {
                ValidationException => StatusCodes.Status400BadRequest,
                FluentValidationException => StatusCodes.Status400BadRequest,
                AuthenticationRequiredException => StatusCodes.Status401Unauthorized,
                PasswordResetRequiredException => StatusCodes.Status403Forbidden,
                AuthenticationFailedException => StatusCodes.Status401Unauthorized,
                ForbiddenException => StatusCodes.Status403Forbidden,
                NotFoundException => StatusCodes.Status404NotFound,
                ConflictException => StatusCodes.Status409Conflict,
                ConcurrencyException => StatusCodes.Status409Conflict,
                BusinessRuleViolationException => StatusCodes.Status422UnprocessableEntity,
                IdentityOperationException => StatusCodes.Status400BadRequest,
                _ => StatusCodes.Status500InternalServerError
            };

            var response = CreateErrorResponse(
                ex,
                context,
                apiContext,
                userContext.TraceId,
                userContext.CorrelationId);

            await context.Response.WriteAsJsonAsync(response);
        }
    }

    private static ProblemDetails CreateErrorResponse(
        Exception ex,
        HttpContext context,
        IApiContext apiContext,
        string traceId,
        string correlationId)
    {
        var status = context.Response.StatusCode;
        var details = ex.Message;
        var path = context.Request.Path;
        var baseUrl = apiContext.BaseUrl;

        return ex switch
        {
            ValidationException => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/validation",
                Title = nameof(ValidationException),
                Status = status,
                Detail = details,
                Instance = path,
                Extensions =
                {
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            },

            FluentValidationException exception => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/validation",
                Title = nameof(FluentValidationException),
                Status = status,
                Detail = ApiMessages.ValidationException,
                Instance = path,
                Extensions =
                {
                    ["errors"] = exception.Errors
                        .GroupBy(
                            error => error.PropertyName,
                            error => error.ErrorMessage)
                        .ToDictionary(
                            group => group.Key,
                            group => group.ToArray()),
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            },

            PasswordResetRequiredException => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/forbidden",
                Title = nameof(PasswordResetRequiredException),
                Status = status,
                Detail = details,
                Instance = path,
                Extensions =
                {
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            },

            AuthenticationRequiredException => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/authentication",
                Title = nameof(AuthenticationRequiredException),
                Status = status,
                Detail = details,
                Instance = path,
                Extensions =
                {
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            },

            AuthenticationFailedException => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/unauthorized",
                Title = nameof(AuthenticationFailedException),
                Status = status,
                Detail = details,
                Instance = path,
                Extensions =
                {
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            },

            ForbiddenException => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/forbidden",
                Title = nameof(ForbiddenException),
                Status = status,
                Detail = details,
                Instance = path,
                Extensions =
                {
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            },

            NotFoundException => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/resource-not-found",
                Title = nameof(NotFoundException),
                Status = status,
                Detail = details,
                Instance = path,
                Extensions =
                {
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            },

            ConcurrencyException => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/concurrency-conflict",
                Title = nameof(ConcurrencyException),
                Status = status,
                Detail = details,
                Instance = path,
                Extensions =
                {
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            },

            ConflictException => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/conflict",
                Title = nameof(ConflictException),
                Status = status,
                Detail = details,
                Instance = path,
                Extensions =
                {
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            },

            BusinessRuleViolationException => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/unprocessable-entity",
                Title = nameof(BusinessRuleViolationException),
                Status = status,
                Detail = details,
                Instance = path,
                Extensions =
                {
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            },

            _ => new ProblemDetails
            {
                Type = $"{baseUrl}/errors/internal-server-error",
                Title = "UnknownException",
                Status = status,
                Detail = details,
                Instance = path,
                Extensions =
                {
                    ["traceId"] = traceId,
                    ["correlationId"] = correlationId
                }
            }
        };
    }
}

using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Mvc;
using DataAnnotationsValidationException = System.ComponentModel.DataAnnotations.ValidationException;
using FluentValidationException = FluentValidation.ValidationException;
using HelpDeskValidationException = HelpDesk.src.Shared.Exceptions.ValidationException;

namespace HelpDesk.src.Infrastructure.Middleware;

public sealed class ExceptionMiddleware(
    RequestDelegate next,
    IWebHostEnvironment env)
{
    public async Task Invoke(
        HttpContext context,
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
                HelpDeskValidationException => StatusCodes.Status400BadRequest,
                FluentValidationException => StatusCodes.Status400BadRequest,
                DataAnnotationsValidationException => StatusCodes.Status400BadRequest,
                AuthenticationFailedException => StatusCodes.Status401Unauthorized,
                ForbiddenException => StatusCodes.Status403Forbidden,
                NotFoundException => StatusCodes.Status404NotFound,
                ConflictException => StatusCodes.Status409Conflict,
                BusinessRuleViolationException => StatusCodes.Status422UnprocessableEntity,
                IdentityOperationException => StatusCodes.Status400BadRequest,
                Exception => StatusCodes.Status500InternalServerError,
            };

            var traceId = userContext.TraceId;
            var correlationId = userContext.CorrelationId;
            bool isDevelopment = env.IsDevelopment();

            var response = CreateErrorResponse(
                ex,
                context,
                traceId,
                correlationId,
                isDevelopment);

            await context.Response.WriteAsJsonAsync(response);
        }
    }

    private static ProblemDetails CreateErrorResponse(
        Exception exception,
        HttpContext httpContext,
        string traceId,
        string correlationId,
        bool isDevelopment)
    {
        var status = httpContext.Response.StatusCode;
        var details = exception.Message;
        var path = httpContext.Request.Path;
        var baseUrl = $"{httpContext.Request.Scheme}://{httpContext.Request.Host}";

        return isDevelopment
            ? exception switch
            {
                HelpDeskValidationException ex => new ValidationProblemDetails(ex.Errors)
                {
                    Type = $"{baseUrl}/errors/validation",
                    Title = "One or more validation errors occurred.",
                    Status = status,
                    Detail = details,
                    Instance = path,
                    Extensions =
                    {
                        ["traceId"] = traceId,
                        ["correlationId"] = correlationId
                    }
                },

                FluentValidationException ex => new ValidationProblemDetails(
                    ex.Errors.GroupBy(
                        error => error.PropertyName, error => error.ErrorMessage)
                           .ToDictionary(
                              group => group.Key, group => group.ToArray()))
                {
                    Type = $"{baseUrl}/errors/validation",
                    Title = "One or more validation errors occurred.",
                    Status = status,
                    Detail = details,
                    Instance = path,
                    Extensions =
                    {
                        ["traceId"] = traceId,
                        ["correlationId"] = correlationId
                    }
                },

                DataAnnotationsValidationException => new ProblemDetails
                {
                    Type = $"{baseUrl}/errors/validation",
                    Title = "One or more validation errors occurred.",
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
                    Title = "Unauthorized",
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
                    Title = "Forbidden",
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
                    Type = $"{baseUrl}/errors/not-found",
                    Title = "Not Found",
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
                    Title = "Concurrency Conflict",
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
                    Title = "Conflict",
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
                    Title = "Unprocessable Entity",
                    Status = status,
                    Detail = details,
                    Instance = path,
                    Extensions =
                    {
                        ["traceId"] = traceId,
                        ["correlationId"] = correlationId
                    }
                },

                Exception => new ProblemDetails
                {
                    Type = $"{baseUrl}/errors/internal-server-error",
                    Title = "Internal Server Error",
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
                    Type = $"{baseUrl}/errors/unknown-error",
                    Title = "Unexpected Error",
                    Status = status,
                    Detail = details,
                    Instance = path,
                    Extensions =
                    {
                        ["traceId"] = traceId,
                        ["correlationId"] = correlationId
                    }
                }
            }
            : new ProblemDetails
            {

            };
    }
}

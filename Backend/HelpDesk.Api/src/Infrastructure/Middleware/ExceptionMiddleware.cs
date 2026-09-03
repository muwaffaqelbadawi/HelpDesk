using System.Diagnostics;
using HelpDesk.src.Shared.Exceptions;
using Microsoft.AspNetCore.Mvc;
using DataAnnotationsValidationException = System.ComponentModel.DataAnnotations.ValidationException;
using FluentValidationException = FluentValidation.ValidationException;
using HelpDeskValidationException = HelpDesk.src.Shared.Exceptions.ValidationException;

namespace HelpDesk.src.Infrastructure.Middleware;

public sealed class ExceptionMiddleware(
    RequestDelegate next,
    IWebHostEnvironment env)
{
    public async Task Invoke(HttpContext context)
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
                Exception => StatusCodes.Status500InternalServerError
            };

            context.Response.ContentType = "application/json";

            var response = CreateErrorResponse(
                ex,
                context,
                env.IsDevelopment());

            await context.Response.WriteAsJsonAsync(response);
        }
    }

    private static ProblemDetails CreateErrorResponse(
        Exception exception,
        HttpContext httpContext,
        bool isDevelopment)
    {
        var status = httpContext.Response.StatusCode;
        var details = exception.Message;
        var path = httpContext.Request.Path;
        var baseUrl = $"{httpContext.Request.Scheme}://{httpContext.Request.Host}";
        var traceId = Activity.Current?.TraceId.ToString()
            ?? httpContext.TraceIdentifier;

        if (isDevelopment)
        {
            return exception switch
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
                        ["traceId"] = traceId
                    }
                },

                FluentValidationException ex => new ValidationProblemDetails(
                    ex.Errors.GroupBy(
                        error => error.PropertyName,
                        error => error.ErrorMessage)
                           .ToDictionary(
                              group => group.Key,
                              group => group.ToArray()))
                {
                    Type = $"{baseUrl}/errors/validation",
                    Title = "One or more validation errors occurred.",
                    Status = status,
                    Detail = details,
                    Instance = path,
                    Extensions =
                    {
                        ["traceId"] = traceId
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
                        ["traceId"] = traceId
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
                        ["traceId"] = traceId
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
                        ["traceId"] = traceId
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
                        ["traceId"] = traceId
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
                        ["traceId"] = traceId
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
                        ["traceId"] = traceId
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
                        ["traceId"] = traceId
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
                        ["traceId"] = traceId
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
                        ["traceId"] = traceId

                    }
                }
            };
        }

        return new ProblemDetails
        {

        };
    }
}

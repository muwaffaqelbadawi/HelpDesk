using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using HelpDesk.src.Shared.Exceptions;

namespace HelpDesk.src.Infrastructure.Middleware;

public sealed class ExceptionMiddleware
{
    // Please refer to RFC3986

    private readonly RequestDelegate _next;
    private readonly IWebHostEnvironment _env;
    private readonly ILogger<ExceptionMiddleware> _logger;

    public ExceptionMiddleware(RequestDelegate next,
        IWebHostEnvironment env,
        ILogger<ExceptionMiddleware> logger)
    {
        _next = next;
        _env = env;
        _logger = logger;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception occurred");

            context.Response.StatusCode = ex switch
            {
                ValidationException => StatusCodes.Status400BadRequest,
                AuthenticationFailedException => StatusCodes.Status401Unauthorized,
                ForbiddenException => StatusCodes.Status403Forbidden,
                NotFoundException => StatusCodes.Status404NotFound,
                ConflictException => StatusCodes.Status409Conflict,
                BusinessRuleViolationException => StatusCodes.Status422UnprocessableEntity,
                IdentityOperationException => StatusCodes.Status400BadRequest,
                Exception => StatusCodes.Status500InternalServerError
            };

            context.Response.ContentType = "application/json";

            var response = CreateErrorResponse(ex, context, _env.IsDevelopment());

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

        string traceId = Activity.Current?.TraceId.ToString()
            ?? httpContext.TraceIdentifier;

        if (isDevelopment)
        {
            return exception switch
            {
                ValidationException ex => new ValidationProblemDetails(ex.Errors)
                {
                    Type = "https://your-api.com/errors/validation",
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
                    Type = "https://your-api.com/errors/unauthorized",
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
                    Type = "https://your-api.com/errors/forbidden",
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
                    Type = "https://your-api.com/errors/not-found",
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
                    Type = "https://your-api.com/errors/concurrency-conflict",
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
                    Type = "https://your-api.com/errors/conflict",
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
                    Type = "https://your-api.com/errors/unprocessable-entity",
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
                    Type = "https://your-api.com/errors/internal-server-error",
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
                    Type = "https://your-api.com/errors/unknown-error",
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

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
                HelpDeskValidationException => StatusCodes.Status400BadRequest,
                FluentValidationException => StatusCodes.Status400BadRequest,
                DataAnnotationsValidationException => StatusCodes.Status400BadRequest,
                AuthenticationRequiredException => StatusCodes.Status401Unauthorized,
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
                exception: ex,
                httpContext: context,
                apiContext: apiContext,
                traceId: traceId,
                correlationId: correlationId,
                isDevelopment: isDevelopment);

            // declared-type vs runtime-type
            await context.Response.WriteAsJsonAsync((object)response);
        }
    }

    private static ProblemDetails CreateErrorResponse(
        Exception exception,
        HttpContext httpContext,
        IApiContext apiContext,
        string traceId,
        string correlationId,
        bool isDevelopment)
    {
        var status = httpContext.Response.StatusCode;
        var details = exception.Message;
        var path = httpContext.Request.Path;
        var baseUrl = apiContext.BaseUrl;

        return isDevelopment
            ? exception switch
            {
                HelpDeskValidationException ex => new ValidationProblemDetails(ex.Errors)
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

                FluentValidationException ex => new ValidationProblemDetails(
                    ex.Errors.GroupBy(
                        error => error.PropertyName, error => error.ErrorMessage)
                           .ToDictionary(
                              group => group.Key, group => group.ToArray()))
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

                DataAnnotationsValidationException => new ProblemDetails
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
                    Type = $"{baseUrl}/errors/not-found",
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

                Exception => new ProblemDetails
                {
                    Type = $"{baseUrl}/errors/internal-server-error",
                    Title = nameof(Exception),
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
                    Title = nameof(Exception),
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

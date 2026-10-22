using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace HelpDesk.src.Presentation.Docs;

public sealed class AuthenticationResponsesOperationFilter : IOperationFilter
{
    public void Apply(
        OpenApiOperation operation,
        OperationFilterContext context)
    {
        var hasAuthorize =
            context.MethodInfo
                .GetCustomAttributes(true)
                .OfType<AuthorizeAttribute>()
                .Any()
            || context.MethodInfo.DeclaringType?
                .GetCustomAttributes(true)
                .OfType<AuthorizeAttribute>()
                .Any() == true;

        var allowsAnonymous =
            context.MethodInfo
                .GetCustomAttributes(true)
                .OfType<AllowAnonymousAttribute>()
                .Any()
            || context.MethodInfo.DeclaringType?
                .GetCustomAttributes(true)
                .OfType<AllowAnonymousAttribute>()
                .Any() == true;

        if (!hasAuthorize || allowsAnonymous)
        {
            return;
        }

        operation.Responses.TryAdd(
            StatusCodes.Status401Unauthorized.ToString(),
            new OpenApiResponse
            {
                Description = ApiMessages.AuthenticationRequired,
                Content = new Dictionary<string, OpenApiMediaType>
                {
                    ["application/problem+json"] = new OpenApiMediaType
                    {
                        Schema = context.SchemaGenerator.GenerateSchema(
                        typeof(ProblemDetails),
                        context.SchemaRepository),

                        Example = new OpenApiObject
                        {
                            ["type"] = new OpenApiString(
                            "https://example.com/errors/authentication"),

                            ["title"] = new OpenApiString("AuthenticateFailure"),

                            ["status"] = new OpenApiInteger(401),

                            ["detail"] = new OpenApiString(ApiMessages.AuthenticationRequired),

                            ["instance"] = new OpenApiString("/me/example"),

                            ["traceId"] = new OpenApiString("example-trace-id"),

                            ["correlationId"] = new OpenApiString("example-correlation-id")
                        }
                    }
                }
            });
    }
}

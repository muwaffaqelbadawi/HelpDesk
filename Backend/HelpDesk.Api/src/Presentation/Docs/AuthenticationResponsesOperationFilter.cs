using System.Text.Json.Nodes;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi;
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

        operation.Responses ??= [];
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

                        Example = new JsonObject
                        {
                            ["type"] = JsonValue.Create(
                            "https://example.com/errors/authentication"),

                            ["title"] = JsonValue.Create("AuthenticateFailure"),

                            ["status"] = JsonValue.Create(401),

                            ["detail"] = JsonValue.Create(ApiMessages.AuthenticationRequired),

                            ["instance"] = JsonValue.Create("/me/example"),

                            ["traceId"] = JsonValue.Create("example-trace-id"),

                            ["correlationId"] = JsonValue.Create("example-correlation-id")
                        }
                    }
                }
            });
    }
}

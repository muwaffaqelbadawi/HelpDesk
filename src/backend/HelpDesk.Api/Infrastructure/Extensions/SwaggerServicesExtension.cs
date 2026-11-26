using HelpDesk.Presentation.Docs;
using Microsoft.OpenApi;

namespace HelpDesk.Infrastructure.Extensions;

public static class SwaggerServicesExtension
{
    public static WebApplicationBuilder AddSwagger(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddSwaggerGen(options =>
        {
            options.AddSecurityDefinition(
                "Bearer",
                new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "Enter: Bearer {your JWT token}"
                });

            options.AddSecurityRequirement(
                document => new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecuritySchemeReference("Bearer", document),
                        []
                    }
                });

            options.OperationFilter<AuthenticationResponsesOperationFilter>();
        });

        return builder;
    }
}

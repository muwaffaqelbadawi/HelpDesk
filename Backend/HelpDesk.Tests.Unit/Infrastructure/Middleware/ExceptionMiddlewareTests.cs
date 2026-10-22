using System.Text.Json;
using FluentValidation;
using FluentValidation.Results;
using HelpDesk.src.Infrastructure.Middleware;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Http;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Infrastructure.Middleware;

public sealed class ExceptionMiddlewareTests
{
    [Fact]
    public async Task FluentValidationException_returns_validation_problem_details()
    {
        // Arrange
        var exception = new ValidationException(
        [
            new ValidationFailure(
                "PageSize",
                "'Page Size' must be between 1 and 100. You entered 101.")
        ]);
        var middleware = new ExceptionMiddleware(_ => throw exception);
        var context = new DefaultHttpContext();
        context.Request.Scheme = "https";
        context.Request.Host = new HostString("localhost:7082");
        context.Request.Path = "/api/admin/tickets";
        context.Response.Body = new MemoryStream();

        var apiContext = Mock.Of<IApiContext>(
            value => value.BaseUrl == "https://localhost:7082/api");
        var userContext = Mock.Of<IUserContext>(
            value => value.TraceId == "trace-123"
                     && value.CorrelationId == "correlation-123");

        // Act
        await middleware.InvokeAsync(context, apiContext, userContext);

        context.Response.Body.Position = 0;
        using var document = await JsonDocument.ParseAsync(
            context.Response.Body,
            cancellationToken: TestContext.Current.CancellationToken);
        var response = document.RootElement;

        // Assert
        Assert.Equal(StatusCodes.Status400BadRequest, context.Response.StatusCode);
        Assert.Equal(
            "https://localhost:7082/api/errors/validation",
            response.GetProperty("type").GetString());
        Assert.Equal("FluentValidationException", response.GetProperty("title").GetString());
        Assert.Equal(StatusCodes.Status400BadRequest, response.GetProperty("status").GetInt32());
        Assert.Equal("One or more validation errors occurred.", response.GetProperty("detail").GetString());
        Assert.Equal("/api/admin/tickets", response.GetProperty("instance").GetString());
        Assert.True(response.TryGetProperty("errors", out var errors), response.GetRawText());
        Assert.Equal(
            "'Page Size' must be between 1 and 100. You entered 101.",
            errors.GetProperty("PageSize")[0].GetString());
        Assert.Equal("trace-123", response.GetProperty("traceId").GetString());
        Assert.Equal("correlation-123", response.GetProperty("correlationId").GetString());
    }
}

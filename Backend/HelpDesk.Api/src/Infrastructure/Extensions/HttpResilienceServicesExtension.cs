using Polly;
using Polly.Retry;
using Polly.Timeout;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class HttpResilienceServicesExtension
{
    // Resilience services
    public static WebApplicationBuilder AddHttpResilienceServices(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddHttpClient("DefaultClient")
            .AddPolicyHandler(GetRetryPolicy())
            .AddPolicyHandler(GetTimeoutPolicy());

        return builder;
    }

    // Retry
    private static AsyncRetryPolicy<HttpResponseMessage> GetRetryPolicy()
    {
        return Policy<HttpResponseMessage>
            .Handle<HttpRequestException>()
            .OrResult(r => (int)r.StatusCode >= 500)
            .WaitAndRetryAsync(
                retryCount: 2,
                sleepDurationProvider: attempt =>
                    TimeSpan.FromSeconds(Math.Pow(2, attempt)));
    }

    //Timeout
    private static AsyncTimeoutPolicy<HttpResponseMessage> GetTimeoutPolicy()
    {
        return Policy.TimeoutAsync<HttpResponseMessage>(
            TimeSpan.FromSeconds(5));
    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.Authorization;

public sealed class PermissionPolicyProvider : IAuthorizationPolicyProvider
{
    private const string PREFIX = "Permission:";

    private DefaultAuthorizationPolicyProvider Fallback { get; }

    public PermissionPolicyProvider(IOptions<AuthorizationOptions> options)
    {
        Fallback = new DefaultAuthorizationPolicyProvider(options);
    }

    public Task<AuthorizationPolicy?> GetPolicyAsync(string policyName)
    {
        // Use memory-safe Span<T>


        if (policyName.StartsWith(PREFIX))
        {
            ReadOnlySpan<char> permission = policyName.AsSpan(PREFIX.Length);

            // Build use case permission
            var policy = new AuthorizationPolicyBuilder()
                .AddRequirements(new PermissionRequirement(permission.ToString()))
                .Build();

            return Task.FromResult<AuthorizationPolicy?>(policy);
        }

        return Fallback.GetPolicyAsync(policyName);
    }

    public Task<AuthorizationPolicy> GetDefaultPolicyAsync()
        => Fallback.GetDefaultPolicyAsync();

    public Task<AuthorizationPolicy?> GetFallbackPolicyAsync()
        => Fallback.GetFallbackPolicyAsync();
}

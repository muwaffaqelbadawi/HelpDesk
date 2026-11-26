using System.Security.Cryptography;
using HelpDesk.Shared.Interfaces;
using Microsoft.AspNetCore.WebUtilities;

namespace HelpDesk.Infrastructure.Services.Jwt;

public sealed class RefreshTokenProvider : IRefreshTokenProvider
{
    public string GenerateRefreshToken()
    {
        return WebEncoders.Base64UrlEncode(
            RandomNumberGenerator.GetBytes(64));
    }
}

using System.Security.Cryptography;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.WebUtilities;

namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed class RefreshTokenProvider : IRefreshTokenProvider
{
    public string GenerateRefreshToken()
    {
        return WebEncoders.Base64UrlEncode(
            RandomNumberGenerator.GetBytes(64));
    }
}

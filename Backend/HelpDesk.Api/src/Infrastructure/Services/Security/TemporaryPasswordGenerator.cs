using System.Security.Cryptography;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Security;

public sealed class TemporaryPasswordGenerator : ITemporaryPasswordGenerator
{
    private const string Uppercase = "ABCDEFGHJKLMNPQRSTUVWXYZ";

    private const string Lowercase = "abcdefghijkmnopqrstuvwxyz";

    private const string Digits = "23456789";

    private const string Special = "!@#$%^&*";

    private const string All =
        Uppercase +
        Lowercase +
        Digits +
        Special;

    public string Generate()
    {
        Span<char> password = stackalloc char[12];

        password[0] = GetRandomChar(Uppercase);
        password[1] = GetRandomChar(Lowercase);
        password[2] = GetRandomChar(Digits);
        password[3] = GetRandomChar(Special);

        for (int i = 4; i < password.Length; i++)
        {
            password[i] = GetRandomChar(All);
        }

        Shuffle(password);

        return new string(password);
    }

    private static char GetRandomChar(string chars)
    {
        return chars[
            RandomNumberGenerator.GetInt32(chars.Length)];
    }

    private static void Shuffle(Span<char> chars)
    {
        for (int i = chars.Length - 1; i > 0; i--)
        {
            int j = RandomNumberGenerator.GetInt32(i + 1);

            (chars[i], chars[j]) =
                (chars[j], chars[i]);
        }
    }
}

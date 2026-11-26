namespace HelpDesk.Shared.Interfaces;

public interface IRefreshTokenProvider
{
    string GenerateRefreshToken();
}

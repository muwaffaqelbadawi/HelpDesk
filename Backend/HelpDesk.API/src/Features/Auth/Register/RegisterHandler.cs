using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Register;

public sealed class RegisterHandler
    : ICommandHandler<RegisterCommand, RegisterResponse>
{
    public Task<RegisterResponse> HandleAsync(
        RegisterCommand command,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}

namespace HelpDesk.src.Shared.Exceptions;

using Microsoft.AspNetCore.Identity;

public sealed class IdentityOperationException : Exception
{
    public IReadOnlyCollection<IdentityError> Errors { get; }

    public IdentityOperationException(IEnumerable<IdentityError> errors)
        : base(errors.FirstOrDefault()?.Description
            ?? "An error occurred while processing the identity operation.")
    {
        Errors = errors.ToList().AsReadOnly();
    }
}

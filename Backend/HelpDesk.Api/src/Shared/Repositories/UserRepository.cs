using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Shared.Repositories;

public sealed class UserRepository : IUserRepository
{
    private readonly AppDbContext _dbContext;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ILogger<UserRepository> _logger;

    public UserRepository(
        UserManager<ApplicationUser> userManager,
        AppDbContext dbContext,

        ILogger<UserRepository> logger)
    {
        _userManager = userManager;
        _dbContext = dbContext;
        _logger = logger;
    }

    public async Task AddAsync(
        ApplicationUser user,
        Employee employee,
        string tempPassword,
        CancellationToken cancellationToken)
    {
        using var transaction = await _dbContext.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            _dbContext.Employees.Add(employee);
            var userResult = await _userManager.CreateAsync(user, tempPassword);

            if (!userResult.Succeeded)
            {
                _logger.LogWarning(
                    "Failed to create user {UserName}. Errors: {Errors}",
                    user.UserName,
                    string.Join(", ", userResult.Errors.Select(e => e.Description)));

                throw new InvalidOperationException(
                    string.Join(", ", userResult.Errors.Select(e => e.Description)));
            }

            await _dbContext.SaveChangesAsync(cancellationToken);

            await transaction.CommitAsync(cancellationToken);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }
}

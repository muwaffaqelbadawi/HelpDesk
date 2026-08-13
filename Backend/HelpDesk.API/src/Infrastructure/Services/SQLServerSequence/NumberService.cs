using System.Data;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.SQLServerSequence;

public sealed class NumberService : INumberingService
{
    private readonly AppDbContext _dbContext;

    public NumberService(
        AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<string> GetNextNumberAsync(
    NumberType type,
    CancellationToken cancellationToken)
    {
        // ADO.NET

        var (sequence, prefix) = type switch
        {
            NumberType.Ticket => ("[Business].[TicketNumber]", "TKT"),
            NumberType.Employee => ("[Business].[EmployeeNumber]", "EMP"),
            _ => throw new ArgumentOutOfRangeException(nameof(type))
        };

        var connection = _dbContext.Database.GetDbConnection();

        if (connection.State != ConnectionState.Open)
        {
            await connection.OpenAsync(cancellationToken);
        }

        await using var command = connection.CreateCommand();

        command.CommandText = $"SELECT NEXT VALUE FOR {sequence}";

        var value = Convert.ToInt64(
            await command.ExecuteScalarAsync(cancellationToken));

        return $"{prefix}-{value}";
    }
}

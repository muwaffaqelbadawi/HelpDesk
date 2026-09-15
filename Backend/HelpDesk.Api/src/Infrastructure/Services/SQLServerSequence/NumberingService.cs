using System.Data;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.SQLServerSequence;

public sealed class NumberingService(AppDbContext dbContext) : INumberingService
{
    public async Task<string> GetNextEmployeeNumberAsync(
        CancellationToken cancellationToken)
    {
        var connection = dbContext.Database.GetDbConnection();

        if (connection.State != ConnectionState.Open)
        {
            await connection.OpenAsync(cancellationToken);
        }

        await using var command = connection.CreateCommand();

        command.CommandText = "SELECT NEXT VALUE FOR [Business].[EmployeeNumber]";

        var value = Convert.ToInt64(
            await command.ExecuteScalarAsync(cancellationToken));

        return value.ToString("D6");
    }

    public async Task<string> GetNextTicketNumberAsync(
        CancellationToken cancellationToken)
    {
        var connection = dbContext.Database.GetDbConnection();

        if (connection.State != ConnectionState.Open)
        {
            await connection.OpenAsync(cancellationToken);
        }

        await using var command = connection.CreateCommand();

        command.CommandText = "SELECT NEXT VALUE FOR [Business].[TicketNumber]";

        var value = Convert.ToInt64(
            await command.ExecuteScalarAsync(cancellationToken));

        return $"TKT-{value:D6}";
    }
}

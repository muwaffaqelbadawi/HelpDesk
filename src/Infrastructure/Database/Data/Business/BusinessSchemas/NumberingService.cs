using System.Data;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Database.Data.Business.BusinessSchemas;

public sealed class NumberingService : INumberingService
{
    private readonly AppDbContext _dbContext;

    public NumberingService(
        AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<string> GetNextEmployeeNumberValueAsync(
        CancellationToken cancellationToken)
    {
        // ADO.NET

        var connection = _dbContext.Database.GetDbConnection();

        if (connection.State != ConnectionState.Open)
            await connection.OpenAsync(cancellationToken);

        await using var command = connection.CreateCommand();

        command.CommandText = "SELECT NEXT VALUE FOR [Business].[EmployeeNumber]";

        var value = Convert.ToInt64(
            await command.ExecuteScalarAsync(cancellationToken));

        // TKT-100000
        return $"TKT-{value}";
    }

    public async Task<string> GetNextTicketNumberValueAsync(
        CancellationToken cancellationToken)
    {
        // ADO.NET

        var connection = _dbContext.Database.GetDbConnection();

        if (connection.State != ConnectionState.Open)
            await connection.OpenAsync(cancellationToken);

        await using var command = connection.CreateCommand();

        command.CommandText = "SELECT NEXT VALUE FOR [Business].[TicketNumber]";

        var value = Convert.ToInt64(
            await command.ExecuteScalarAsync(cancellationToken));

        // TKT-100000
        return $"TKT-{value}";
    }
}

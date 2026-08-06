using HelpDesk.src.Infrastructure.Database.Data.Business.BusinessSchemas;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Employees.Create;

public sealed class CreateEmployeeHandler :
    ICommandHandler<CreateEmployeeCommand, CreateEmployeeResponse>
{
    private readonly IDateTimeService _dateTimeService;
    private readonly INumberingService _numberingService;
    private readonly ILogger<CreateEmployeeHandler> _logger;

    public CreateEmployeeHandler(
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        ILogger<CreateEmployeeHandler> logger)
    {
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<CreateEmployeeResponse> HandleAsync(
        CreateEmployeeCommand request,
        CancellationToken cancellationToken)
    {
        var employeeNumber = await _numberingService.GetNextNumberAsync(
            NumberType.Employee,
            cancellationToken);

        // Create a new employee
        var employee = new Employee
        {
            FullEnName = request.FullEnName,
            FullArName = request.FullArName,
            Number = employeeNumber
        };

        return new CreateEmployeeResponse(
            Message: "",
            CreatedAt: _dateTimeService.UtcNow);
    }
}

using HelpDesk.src.Features.Users.Create;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Employees.Create;

public sealed class CreateEmployeeHandler :
    ICommandHandler<CreateEmployeeCommand, CreateEmployeeResponse>
{
    private readonly IDateTimeService _dateTimeService;
    private readonly INumberingService _numberingService;
    private readonly ILogger<CreateUserHandler> _logger;

    public CreateEmployeeHandler(
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        ILogger<CreateUserHandler> logger)
    {
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<CreateEmployeeResponse> HandleAsync(
        CreateEmployeeCommand request,
        CancellationToken cancellationToken)
    {
        // Generate employee number
        var employeeNumber = await _numberingService
            .GetNextEmployeeNumberValueAsync(cancellationToken);

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

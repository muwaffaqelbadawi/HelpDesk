using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Presentation.Controllers.User;

[ApiController]
[Route("api/employees")]
[Authorize] // Ensures all actions require authentication
public sealed class EmployeeController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;
    private readonly IDateTimeService _dateTimeService;

    public EmployeeController(
        IWebHostEnvironment environment,
        IDateTimeService dateTimeService)
    {
        _environment = environment;
        _dateTimeService = dateTimeService;
    }



}

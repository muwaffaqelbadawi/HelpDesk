using HelpDesk.src.Features.Settings.Users.Countries.Get;
using HelpDesk.src.Features.Settings.Users.Countries.Set;
using HelpDesk.src.Features.Settings.Users.Languages.Get;
using HelpDesk.src.Features.Settings.Users.Languages.Set;
using HelpDesk.src.Features.Settings.Users.PhoneNumbers.Set;
using HelpDesk.src.Features.Settings.Users.TimeZones.Get;
using HelpDesk.src.Features.Settings.Users.TimeZones.Set;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Customer;

[ApiController]
[Route("api/me/settings")]
[Authorize]
public sealed class SettingsController(IDateTimeService dateTimeService) : ControllerBase
{
    // Role: "Customer"

    // TimeZone
    [HttpGet("get-time-zones")]
    public async Task<IActionResult> GetAllTimeZones(
        [FromServices] IQueryHandler<GetAllTimeZonesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<GetAllTimeZonesResponse>(
            message: ApiMessages.TimeZonesRetrieved,
            time: dateTimeService,
            data: result));
    }

    [HttpPut("set-time-zone")]
    public async Task<IActionResult> SetTimeZone(
        [FromServices] ICommandHandler<SetTimeZoneCommand, SetTimeZoneResponse> handler,
        [FromBody] SetTimeZoneBody body,
        CancellationToken cancellationToken)
    {
        var command = new SetTimeZoneCommand(body.TimeZoneId);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<SetTimeZoneResponse>(
            message: ApiMessages.UserTimeZoneSet,
            time: dateTimeService,
            data: result));
    }

    // Languages
    [HttpGet("get-languages")]
    public async Task<IActionResult> GetAllLanguages(
        [FromServices] IQueryHandler<GetAllLanguagesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<GetAllLanguagesResponse>(
            message: ApiMessages.LanguagesRetrieved,
            time: dateTimeService,
            data: result));
    }

    [HttpPut("set-language")]
    public async Task<IActionResult> SetPreferredLanguage(
        [FromServices] ICommandHandler<SetPreferredLanguageCommand, SetPreferredLanguageResponse> handler,
        [FromBody] SetPreferredLanguageBody body,
        CancellationToken cancellationToken)
    {
        var command = new SetPreferredLanguageCommand(body.PreferredLanguageId);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<SetPreferredLanguageResponse>(
            message: ApiMessages.UserPreferredLanguageSet,
            time: dateTimeService,
            data: result));
    }

    // Country
    [HttpGet("get-countries")]
    public async Task<IActionResult> GetAllCountries(
        [FromServices] IQueryHandler<GetAllCountriesResponse> handler,
        CancellationToken cancellationToken)
    {
        var result = await handler.HandleAsync(cancellationToken);

        return Ok(new ApiResponse<GetAllCountriesResponse>(
            message: ApiMessages.CountriesRetrieved,
            time: dateTimeService,
            data: result));
    }

    [HttpPut("set-country")]
    public async Task<IActionResult> SetCountry(
        [FromServices] ICommandHandler<SetCountryCommand, SetCountryResponse> handler,
        [FromBody] SetCountryBody body,
        CancellationToken cancellationToken)
    {
        var command = new SetCountryCommand(body.CountryId);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<SetCountryResponse>(
            message: ApiMessages.UserCountrySet,
            time: dateTimeService,
            data: result));
    }

    // PhoneNumber
    [HttpPut("set-phone-number")]
    public async Task<IActionResult> SetPhoneNumber(
        [FromServices] ICommandHandler<SetPhoneNumberCommand, SetPhoneNumberResponse> handler,
        [FromBody] SetPhoneNumberBody body,
        CancellationToken cancellationToken)
    {
        var command = new SetPhoneNumberCommand(body.PhoneNumber);

        var result = await handler.HandleAsync(command, cancellationToken);

        return Ok(new ApiResponse<SetPhoneNumberResponse>(
            message: ApiMessages.UserPhoneNumberSet,
            time: dateTimeService,
            data: result));
    }
}

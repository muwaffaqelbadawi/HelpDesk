using HelpDesk.Infrastructure.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.AddApplicationServices();

var app = builder.Build();

await app.UseApplication();

app.Run();

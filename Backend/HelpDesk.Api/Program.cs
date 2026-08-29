using HelpDesk.src.Infrastructure.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.AddApplicationServices();

var app = builder.Build();

await app.UseApplication(builder);

app.Run();

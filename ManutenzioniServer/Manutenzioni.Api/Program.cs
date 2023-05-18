using Manutenzioni.Api.Middleware;
using Manutenzioni.Application;
using Manutenzioni.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";




// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//aggiunta implementazione
builder.Services.AddInfrastructureServices(builder.Configuration);
builder.Services.AddApplicationServices();
//builder.Services.AddSopranIntranetInfrastructureServices(builder.Configuration);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                        builder =>
                        {
                            //builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200/home/course");
                            builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                        });
});





var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ExceptionMiddleware>();

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);


app.UseAuthorization();

app.MapControllers();

app.Run();

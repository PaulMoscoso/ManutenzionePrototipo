using Manutenzioni.Application.Contracts.IRepositories;
using Manutenzioni.Infrastructure.Repositories;
using Manutenzioni.Infrastructure.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Manutenzioni.Infrastructure
{
    public static class InfrastructureServiceRegistration
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<NetSopranDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("ConnectionStringSopranNet")));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            //services.AddScoped(typeof(IBaseSimpleRepository<>), typeof(BaseSimpleRepository<>));
            //services.AddScoped<IMonitoringAllProcessRepository, MonitoringAllProcessRepository>();
            return services;
        }
    }
}

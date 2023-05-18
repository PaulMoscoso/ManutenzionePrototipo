using FluentValidation;
using Manutenzioni.Application.Behaviours;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Manutenzioni.Application
{
    public static class ApplicationServiceRegistration
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
            services.AddOptions();
            services.AddMediatR(Assembly.GetExecutingAssembly());
            //services.AddMediatR(AppDomain.CurrentDomain.GetAssemblies());
           // services.AddMediatR(AppDomain.CurrentDomain.GetAssemblies());
            // services.AddMediatR(typeof(myAssemblyStuff).GetTypeInfo().Assembly);
            //services.AddScoped(typeof(IUniversityRepository), typeof(UniversitySqlServerRepository));

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(UnhandledExceptionBehaviour<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehaviour<,>));

            return services;
        }
    }
}

using AutoMapper;
using Manutenzioni.Application.Features.GetMaCustSupp;
using Manutenzioni.Application.Features.StoreProcedure.SpAllHomeCaricoGlauco.Queries;
using Manutenzioni.Domain.Models;
using Manutenzioni.Domain.Models.StoreProcedure;

namespace Manutenzioni.Application.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<SP_GetHomeCaricoGlauco, SP_GetHomeCaricoGlaucoVm>();
            CreateMap<MA_CustSupp, MA_CustSuppVm>();
        }
    }
}

using MediatR;

namespace Manutenzioni.Application.Features.StoreProcedure.SpAllHomeCaricoGlauco.Queries
{
    public class GetAllSpHomeCaricoGlaucoQuery : IRequest<List<SP_GetHomeCaricoGlaucoVm>>
    {
        public string paramiter { get; set; }

        public GetAllSpHomeCaricoGlaucoQuery(string paramiter)
        {
            this.paramiter = paramiter;
        }
    }
}

using Manutenzioni.Application.Contracts.IRepositories.Common;
using Manutenzioni.Application.Dtos.StoreProcedure.GetHomeCaricoGlauco;
using Manutenzioni.Domain.Models.StoreProcedure;

namespace Manutenzioni.Application.Contracts.IRepositories.StoreProcedure
{
    public interface ISP_GetHomeCaricoGlaucoRepository : IBaseSimpleRepository<SP_GetHomeCaricoGlauco>
    {
        Task<IEnumerable<SP_GetHomeCaricoGlauco>> GetListByRequest(HomeCaricoGlaucoRequest homeCaricoGlaucoRequest);

        Task<IEnumerable<SP_GetHomeCaricoGlauco>> GetAllList();
    }
}

using Manutenzioni.Application.Contracts.IRepositories.StoreProcedure;
using Manutenzioni.Application.Dtos.StoreProcedure.GetHomeCaricoGlauco;
using Manutenzioni.Domain.Models.StoreProcedure;
using Manutenzioni.Infrastructure.Repositories.Common;
using Manutenzioni.Infrastructure.Service;
using Microsoft.EntityFrameworkCore;

namespace Manutenzioni.Infrastructure.Repositories.StoreProcedure
{
    public class SP_GetHomeCaricoGlaucoRepository : BaseSimpleRepository<SP_GetHomeCaricoGlauco>, ISP_GetHomeCaricoGlaucoRepository
    {
        public SP_GetHomeCaricoGlaucoRepository(NetSopranDbContext context) : base(context)
        {
            _Context.Database.SetCommandTimeout(50000);
        }

        public async Task<IEnumerable<SP_GetHomeCaricoGlauco>> GetListByRequest(HomeCaricoGlaucoRequest homeCaricoGlaucoRequest)
        {
            string StoredProc = "exec SP_GetHomeCaricoGlauco ";
                //"@uidUtente = " + inputAssociaCorso.UidUtente + "," +
                //"@agenzia = '" + inputAssociaCorso.Agenzia + "'," +
                //"@gruppo= '" + inputAssociaCorso.Gruppo + "'," +
                //"@idTipocorso= '" + inputAssociaCorso.IdTipoCorso + "'," +
                //"@idCorso= " + inputAssociaCorso.IdCorso + "," +
                //"@filiali=" + "'" + inputAssociaCorso.Filiali.ToString() + "'";
            //"@filiali=" + "'[{\"filialeId\":165}]'";
            return await _Context.SP_GetHomeCaricoGlauco.FromSqlRaw(StoredProc).ToListAsync();
        }

        public async Task<IEnumerable<SP_GetHomeCaricoGlauco>> GetAllList()
        {
            string StoredProc = "exec SP_GetHomeCaricoGlauco ";
            return await _Context.SP_GetHomeCaricoGlauco.FromSqlRaw(StoredProc).ToListAsync();
        }
    }
}

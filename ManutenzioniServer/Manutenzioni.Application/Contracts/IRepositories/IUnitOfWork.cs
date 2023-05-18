using Manutenzioni.Application.Contracts.IRepositories.Common;
using Manutenzioni.Application.Contracts.IRepositories.StoreProcedure;

namespace Manutenzioni.Application.Contracts.IRepositories
{
    public interface IUnitOfWork : IDisposable
    {
        ISP_GetHomeCaricoGlaucoRepository sP_GetHomeCaricoGlaucoRepository { get; }

        //---------------
        IBaseCompleteRepository<TEntity> Repository<TEntity>() where TEntity : class;
        Task<int> Complete();
    }
}

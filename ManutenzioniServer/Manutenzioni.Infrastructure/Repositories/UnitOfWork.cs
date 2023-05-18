using Manutenzioni.Application.Contracts.IRepositories;
using Manutenzioni.Application.Contracts.IRepositories.Common;
using Manutenzioni.Infrastructure.Service;
using Manutenzioni.Infrastructure.Repositories.Common;
using System.Collections;
using Manutenzioni.Application.Contracts.IRepositories.StoreProcedure;
using Manutenzioni.Infrastructure.Repositories.StoreProcedure;

namespace Manutenzioni.Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private Hashtable _repositories;
        private readonly NetSopranDbContext _context;
        //----------------

        private ISP_GetHomeCaricoGlaucoRepository _sP_GetHomeCaricoGlaucoRepository;
        public ISP_GetHomeCaricoGlaucoRepository sP_GetHomeCaricoGlaucoRepository => _sP_GetHomeCaricoGlaucoRepository ??= new SP_GetHomeCaricoGlaucoRepository(_context);


        //__________________


        public UnitOfWork(NetSopranDbContext context)
        {
            _context = context;
        }

        public async Task<int> Complete()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IBaseCompleteRepository<TEntity> Repository<TEntity>() where TEntity : class
        {
            if (_repositories == null)
            {
                _repositories = new Hashtable();
            }

            var type = typeof(TEntity).Name;

            if (!_repositories.ContainsKey(type))
            {
                var repositoryType = typeof(BaseCompleteRepository<>);

                var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(TEntity)), _context);
                _repositories.Add(type, repositoryInstance);
            }

            return (IBaseCompleteRepository<TEntity>)_repositories[type];
        }
    }
}

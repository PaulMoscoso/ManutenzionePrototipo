namespace Manutenzioni.Application.Contracts.IRepositories.Common
{
    public interface IBaseCompleteRepository<T> : IBaseSimpleRepository<T>
    {
        Task<T> AddAsync(T entity);

        Task<T> UpdateAsync(T entity);

        Task DeleteAsync(T entity);

        void AddEntity(T entity);

        void UpdateEntity(T entity);

        void DeleteEntity(T entity);
    }
}

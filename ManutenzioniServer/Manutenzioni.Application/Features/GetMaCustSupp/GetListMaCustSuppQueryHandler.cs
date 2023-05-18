using AutoMapper;
using Manutenzioni.Application.Contracts.IRepositories;
using Manutenzioni.Application.Exceptions;
using Manutenzioni.Domain.Models;
using MediatR;

namespace Manutenzioni.Application.Features.GetMaCustSupp
{
    public class GetListMaCustSuppQueryHandler : IRequestHandler<GetListMaCustSuppQuery, List<MA_CustSuppVm>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetListMaCustSuppQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<List<MA_CustSuppVm>> Handle(GetListMaCustSuppQuery request, CancellationToken cancellationToken)
        {
            var listCustomer = await _unitOfWork.Repository<MA_CustSupp>().GetAllAsync();
            if (listCustomer == null)
            {
                throw new NotFoundExceptionGetList("MA_CustSupp");
            }
            return _mapper.Map<List<MA_CustSuppVm>>(listCustomer);
        }
    }
}

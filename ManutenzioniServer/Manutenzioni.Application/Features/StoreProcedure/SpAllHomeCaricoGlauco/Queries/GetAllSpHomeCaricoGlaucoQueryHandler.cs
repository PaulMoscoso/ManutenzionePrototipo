using AutoMapper;
using Manutenzioni.Application.Contracts.IRepositories;
using Manutenzioni.Application.Exceptions;
using MediatR;

namespace Manutenzioni.Application.Features.StoreProcedure.SpAllHomeCaricoGlauco.Queries
{
    public class GetAllSpHomeCaricoGlaucoQueryHandler : IRequestHandler<GetAllSpHomeCaricoGlaucoQuery, List<SP_GetHomeCaricoGlaucoVm>>
    {
        private readonly IUnitOfWork _unitOfWork;
        
        private readonly IMapper _mapper;

        public GetAllSpHomeCaricoGlaucoQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<List<SP_GetHomeCaricoGlaucoVm>> Handle(GetAllSpHomeCaricoGlaucoQuery request, CancellationToken cancellationToken)
        {
            var listHomCaricoGlauco = await _unitOfWork.sP_GetHomeCaricoGlaucoRepository.GetAllList();
            if (listHomCaricoGlauco == null)
            {
                throw new NotFoundExceptionGetList("SP_GetHomeCaricoGlaucoVm");
            }
            return _mapper.Map<List<SP_GetHomeCaricoGlaucoVm>>(listHomCaricoGlauco);
        }
    }
}

//using AutoMapper;
//using Manutenzioni.Application.Contracts.IRepositories;
//using Manutenzioni.Application.Exceptions;
//using Manutenzioni.Application.Features.StoreProcedure.SpHomeCaricoGlauco.Common;
//using MediatR;

//namespace Manutenzioni.Application.Features.StoreProcedure.SpHomeCaricoGlauco.Queries
//{
//    public class GetSpHomeCaricoGlaucoQueryHandler : IRequestHandler<GetSpHomeCaricoGlaucoQuery, List<SP_GetHomeCaricoGlaucoVm>>
//    {
//        private readonly IUnitOfWork _unitOfWork;
//        private readonly IMapper _mapper;

//        public GetSpHomeCaricoGlaucoQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
//        {
//            _unitOfWork = unitOfWork;
//            _mapper = mapper;
//        }

//        public async Task<List<SP_GetHomeCaricoGlaucoVm>> Handle(GetSpHomeCaricoGlaucoQuery request, CancellationToken cancellationToken)
//        {
//            var listHomCaricoGlauco = await _unitOfWork.sP_GetHomeCaricoGlaucoRepository.GetListByRequest(request._homeCaricoGlaucoRequest);
//            if (listHomCaricoGlauco == null)
//            {
//                throw new NotFoundExceptionGetList("SP_GetHomeCaricoGlaucoVm");
//            }
//            return _mapper.Map<List<SP_GetHomeCaricoGlaucoVm>>(listHomCaricoGlauco);
//        }
//    }
//}

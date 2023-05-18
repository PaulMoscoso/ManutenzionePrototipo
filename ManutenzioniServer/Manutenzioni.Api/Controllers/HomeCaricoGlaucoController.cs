//using Manutenzioni.Application.Dtos.StoreProcedure.GetHomeCaricoGlauco;
using Manutenzioni.Application.Features.StoreProcedure.SpAllHomeCaricoGlauco.Queries;
//using Manutenzioni.Application.Features.StoreProcedure.SpHomeCaricoGlauco.Common;
//using Manutenzioni.Application.Features.StoreProcedure.SpHomeCaricoGlauco.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Manutenzioni.Api.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class HomeCaricoGlaucoController: ControllerBase
    {
        private readonly IMediator _mediator;

        public HomeCaricoGlaucoController(IMediator mediator)
        {
            _mediator = mediator;
        }

        //[HttpPost("list", Name = "getSpHomeCaricoGlaucoByParamites")]
        //[ProducesResponseType(typeof(IEnumerable<SP_GetHomeCaricoGlaucoVm>), (int)HttpStatusCode.OK)]
        //public async Task<ActionResult<IEnumerable<SP_GetHomeCaricoGlaucoVm>>> GetSpHomeCaricoGlaucoByParamiters([FromBody] HomeCaricoGlaucoRequest homeCaricoGlaucoRequest)
        //{
        //    var query = new GetSpHomeCaricoGlaucoQuery(homeCaricoGlaucoRequest);
        //    var list = await _mediator.Send(query);
        //    return Ok(list);
        //}

        [HttpGet("listHomeCarico", Name = "getAllSpHomeCaricoGlauco")]
        [ProducesResponseType(typeof(IEnumerable<SP_GetHomeCaricoGlaucoVm>), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<IEnumerable<SP_GetHomeCaricoGlaucoVm>>> getAllSpHomeCaricoGlauco()
        {
            var query = new GetAllSpHomeCaricoGlaucoQuery("");
            var list = await _mediator.Send(query);
            return Ok(list);
        }

    }
}

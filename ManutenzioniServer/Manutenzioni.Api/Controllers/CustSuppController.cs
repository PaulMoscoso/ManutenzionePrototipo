using Manutenzioni.Application.Features.GetMaCustSupp;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Manutenzioni.Api.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class CustSuppController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CustSuppController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("listCustSupp", Name = "GetListCustSupp")]
        [ProducesResponseType(typeof(IEnumerable<MA_CustSuppVm>), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<IEnumerable<MA_CustSuppVm>>> GetListCustSupp()
        {
            var query = new GetListMaCustSuppQuery();
            var list = await _mediator.Send(query);
            return Ok(list);
        }
    }
}

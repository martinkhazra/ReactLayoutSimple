using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactLayoutSimple.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactLayoutSimple.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityNameController : ControllerBase
    {
        [HttpGet("[action]")]
        public IActionResult CityInfo()
        {

            DbMearskEmployee db = new DbMearskEmployee();
            return Ok(db.cities.Select(x => new { x.Id, x.Name }).ToList());
        }
    }
}

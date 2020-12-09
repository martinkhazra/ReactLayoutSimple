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
    public class CountryController : ControllerBase
    {
        [HttpGet("[action]")]
        public IActionResult GetCountries()
        {
            
            DbMearskEmployee db = new DbMearskEmployee();
            return Ok(db.countries.Select(x => new { x.Id, x.Name }).ToList());
        }
    }
}

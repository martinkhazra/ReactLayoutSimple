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
    public class CityController : ControllerBase
    {
        [HttpGet("[action]/{CountryId}")]
        public IActionResult Getcities(int CountryId)
        {
            DbMearskEmployee db = new DbMearskEmployee();
            var p = db.cities.Where(x => x.CountryId == CountryId)
                .Select(x => new { x.Id, x.Name }).ToList();
            return Ok(p);
        }
    }
}

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
    public class SearchController : ControllerBase
    {
        [HttpGet("[action]/{txtsearch}")]
        public IActionResult Getemployees(string txtsearch)
        {
            DbMearskEmployee db = new DbMearskEmployee();
            var employees = db.employees.Where(
                x => x.Name.ToLower().Contains(txtsearch.ToLower()))
                .Select(x => new { x.Name, x.Family, x.Id }).ToList();
            return Ok(employees);
        }
    }
}

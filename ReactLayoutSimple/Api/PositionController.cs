using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactLayoutSimple.Models;
using ReactLayoutSimple.ViewModels;

namespace ReactLayoutSimple.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {
        [HttpPost("[action]")]
        public IActionResult InsertPosition([FromForm]PositionViewModel position)

        {
            DbMearskEmployee db = new DbMearskEmployee();
            Position posit = new Position {
                Name = position.name
            };
            db.Add(posit);
            db.SaveChanges();
            return Redirect("/insertposition");
        }

        [HttpGet("[action]")]
        public IActionResult GetPositionInfo()
        {
            DbMearskEmployee db = new DbMearskEmployee();
            return Ok(db.positions.Select(x => new { x.Id, x.Name }).ToList());
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactLayoutSimple.Models;
using ReactLayoutSimple.ViewModels;

namespace ReactLayoutSimple.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        [HttpPost("[action]")]
        public IActionResult InsertDepartment([FromForm] DepartmentViewModel department)
        {
            DbMearskEmployee db = new DbMearskEmployee();
            Department dept = new Department
            {

                Name = department.name,
                CityId = department.cityid
            };
            db.Add(dept);
            db.SaveChanges();
            return Redirect("/insertdepartment");

        }

        //[HttpGet("[action]")]
        //public IActionResult GetDepartmentInfo()
        //{
        //    DbMearskEmployee db = new DbMearskEmployee();
        //    return Ok(db.departments.Select(x => new { x.Id, x.Name }).ToList());
        //}
        [HttpGet("[action]/{cityid}")]
        public IActionResult GetDepartment(int cityid)
        {
            DbMearskEmployee db = new DbMearskEmployee();
            return Ok(db.departments.Where(x=> x.CityId == cityid).ToList());
        }
    }
}

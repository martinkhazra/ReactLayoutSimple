using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactLayoutSimple.Models;
using ReactLayoutSimple.ViewModels;

namespace ReactLayoutSimple.Controllers
{
    public class EmployeeController : Controller
    {
        [HttpPost()]
        public IActionResult InsertEmployee(EmployeeViewModel employee)
        {
            DbMearskEmployee db = new DbMearskEmployee();
            return Ok();
        }
    }
}

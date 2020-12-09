using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactLayoutSimple.Controllers;
using ReactLayoutSimple.Models;
using ReactLayoutSimple.ViewModels;

namespace ReactLayoutSimple.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        [HttpGet("[action]")]
        public IActionResult GetEmployees()
        {
            DbMearskEmployee db = new DbMearskEmployee();
            List<Employee> employees = db.employees.Include(x => x.Department).Include(x => x.Position).ToList();
            return Ok(employees.Select(x => new
            {
                x.DepartmentId,
                x.Family,
                x.Name,
                x.Id,
                x.Mobile,
                x.PositionId,
                departmentname = x.Department.Name,
                positionname = x.Position.Name,
                x.Salary,
                img = $"data:image/jpeg;base64,{Convert.ToBase64String(x.Image)}"
            }).ToList());
        }
        //insert employee
        [HttpPost("[action]")]
        public IActionResult InsertEmployee(
            [FromForm] EmployeeViewModel employeeviewmodel,
            [FromServices] IMapper mapper)
        {
            DbMearskEmployee db = new DbMearskEmployee();
            //Employee emp = new Employee()
            //{
            //    Name = employee.name,
            //    Family = employee.family,
            //    Salary = employee.salary,
            //    Mobile = employee.mobile,
            //    DepartmentId = employee.departmentId,
            //    PositionId = employee.positionId
            //};
            Employee emp =
                mapper.Map<Employee>(employeeviewmodel);
            //if (employeeviewmodel.image != null)
            //{
            //    byte[] b = new byte[employeeviewmodel.image.Length];
            //    employeeviewmodel.image.OpenReadStream().Read(b, 0, b.Length);
            //    emp.Image = b;
            //}
            db.Add(emp);
            db.SaveChanges();
            return Redirect("/insertemployee");
        }

        //Delete
        [HttpDelete("[action]/{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            DbMearskEmployee db = new DbMearskEmployee();
            Employee employee = db.Find<Employee>(id);
            try
            {
                db.Remove(employee);
                db.SaveChanges();
                return Ok(true);
            }
            catch
            {
                return Ok(false);
            }
        }
    }
}

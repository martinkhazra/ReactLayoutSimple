using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactLayoutSimple.ViewModels
{
    public class EmployeeViewModel
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string family { get; set; }
        public string salary { get; set; }
        public string mobile { get; set; }
        public string position { get; set; }
        public int positionId { get; set; }
        public string department { get; set; }
        public int departmentId { get; set; }
        public IFormFile image { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactLayoutSimple.Models
{
    public class Position
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Employee> Employees { get; set; }
       
    }
}

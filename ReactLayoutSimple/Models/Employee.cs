using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactLayoutSimple.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Family { get; set; }
        public string Salary { get; set; }
        public string Mobile { get; set; } 
        public byte[] Image { get; set; }

        public int DepartmentId { get; set; }
        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }

        public int PositionId { get; set; }
        [ForeignKey("PositionId")]
        public Position Position { get; set; }

        
    }
}

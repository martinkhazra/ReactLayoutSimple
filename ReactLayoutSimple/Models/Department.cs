using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactLayoutSimple.Models
{
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Employee> Employees  { get; set; }
        public int CityId { get; set; }
        [ForeignKey("CityId")]
        public City City { get; set; }
    }
}

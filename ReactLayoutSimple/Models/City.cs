using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Permissions;
using System.Threading.Tasks;

namespace ReactLayoutSimple.Models
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int CountryId { get; set; }
        [ForeignKey("CountryId")]
        public Country Country { get; set; }

        public List<Department> Departments { get; set; }
    }
}

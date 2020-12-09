using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactLayoutSimple.Models
{
    public class DbMearskEmployee: DbContext
    {
        public DbSet<Employee> employees { get; set; }
        public DbSet<Department> departments { get; set; }
        public DbSet<Position> positions { get; set; }
        public DbSet<Country> countries { get; set; }
        public DbSet<City> cities { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("data source=.;initial catalog=DbMearsk; integrated security=true");
        }
    }
}

using AutoMapper;
using Microsoft.AspNetCore.Http;
using ReactLayoutSimple.Models;
using ReactLayoutSimple.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactLayoutSimple.Services
{
    public class KhazraAutoMapper : Profile
    {
        private byte[] DownloadImage(IFormFile img)
        {
            if (img != null)
            {
                byte[] b = new byte[img.Length];
                img.OpenReadStream().Read(b, 0, b.Length);
                return b;
            }
            return new byte[] { 0 };
        }
        public KhazraAutoMapper()
        {
            //Employee
            CreateMap<EmployeeViewModel, Employee>()
                .ForMember(x => x.Image, z => z.MapFrom(y => DownloadImage(y.image)));


            CreateMap<Employee, EmployeeViewModel>();
            //Department
            CreateMap<DepartmentViewModel, Department>();
            CreateMap<Department, DepartmentViewModel>();

        }
    }
}

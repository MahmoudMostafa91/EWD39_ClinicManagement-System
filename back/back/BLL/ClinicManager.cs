using back.Models;
using back.Repostory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back.BLL
{
    public class ClinicManager:Repository<Clinic,ApplicationDbContext>
    {
        public ClinicManager(ApplicationDbContext context):base(context)
        {

        }
    }
}
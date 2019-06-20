using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using back.Models;
using back.Repostory;
namespace back.BLL
{
    public class AvailableAppointementManager : Repository<AvailableAppointementManager, ApplicationDbContext>
    {
        public AvailableAppointementManager(ApplicationDbContext context) : base(context)
        {

        }
    }
}
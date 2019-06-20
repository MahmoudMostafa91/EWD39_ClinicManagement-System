using back.Models;
using back.Repostory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back.BLL
{
    public class ReservatiopnAppointementManager : Repository<ReservatiopnAppointementManager, ApplicationDbContext>
    {
        public ReservatiopnAppointementManager(ApplicationDbContext context) : base(context)
        {

        }
    }
}
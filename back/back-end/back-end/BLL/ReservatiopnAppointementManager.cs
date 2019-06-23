using back_end.Models;
using back_end.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_end.BLL
{
    public class ReservatiopnAppointementManager : Repository<ReservatiopnAppointementManager, ApplicationDbContext>
    {
        public ReservatiopnAppointementManager(ApplicationDbContext context) : base(context)
        {

        }
    }
}
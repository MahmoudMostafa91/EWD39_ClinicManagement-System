using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using back.Models;
using back.Repostory;
namespace back.BLL
{
    public class DrManager : Repository<Doctor, ApplicationDbContext>
    {
        public DrManager(ApplicationDbContext context) : base(context)
        {

        }
    }
}
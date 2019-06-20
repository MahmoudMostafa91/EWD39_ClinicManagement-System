using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using back.Models;
using back.Repostory;
namespace back.BLL
{
    public class OperationManager : Repository<Operation, ApplicationDbContext>
    {
        public OperationManager(ApplicationDbContext context) : base(context)
        {

        }
    }
}
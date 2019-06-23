using back_end.Models;
using back_end.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_end.BLL
{
    public class OperationManager : Repository<Operation, ApplicationDbContext>
    {
        public OperationManager(ApplicationDbContext context) : base(context)
        {

        }
    }
}
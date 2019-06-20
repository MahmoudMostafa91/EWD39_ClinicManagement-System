using back.BLL;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using System;

using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back.Models
{
    public class UnitOfWork : IDisposable
    {
        private readonly ApplicationDbContext context;
        private UnitOfWork(IOwinContext owinContext)
        {
            context = owinContext.Get<ApplicationDbContext>();
            AppUserManager = owinContext.Get<ApplicationUserManager>();
           
        }
        public ApplicationUserManager AppUserManager { get; }

        public DrManager drManager
        {
            get
            {
                return new DrManager(context);
            }
        }
        public ClinicManager ClinicManager
        {
            get
            {
                return new ClinicManager(context);
            }
        }
        public AvailableAppointementManager AvailableManager
        {
            get
            {
                return new AvailableAppointementManager(context);
            }
        }
        public OperationManager operationManager
        {
            get
            {
                return new OperationManager(context);
            }
        }
        public ReservatiopnAppointementManager ReservatiopnAppointementManager
        {
            get
            {
                return new ReservatiopnAppointementManager(context);
            }
        }
        public static UnitOfWork Create(IdentityFactoryOptions<UnitOfWork> options, IOwinContext owinContext)
        {
            return new UnitOfWork(owinContext);
        }

        public void Dispose()
        {
        }
    }
}
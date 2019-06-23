using back_end.Models;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace back_end.Controllers
{
    public class ReservationController : ApiController
    {
        ApplicationDbContext db = new ApplicationDbContext();
        public UnitOfWork UnitOfWork
        {
            get
            {
                HttpContext context = HttpContext.Current;

                return context.GetOwinContext().Get<UnitOfWork>(); ;

            }
        }

        // GET: api/Reservation
        public IEnumerable<ReservatiopnAppointement> Get()
        {
            return UnitOfWork.ReservatiopnAppointementManager.GetAll().ToList();
        }

        // GET: api/Reservation/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Reservation
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Reservation/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Reservation/5
        public void Delete(int id)
        {
        }
    }
}

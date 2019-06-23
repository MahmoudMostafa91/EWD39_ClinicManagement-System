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
    public class DoctorController : ApiController
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

        // GET: api/Doctor
        public IEnumerable<Doctor> Get()
        {
            //var x = UnitOfWork;
            return UnitOfWork.drManager.GetAll().ToList();
            //return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public Doctor Get(int id)
        {
            return UnitOfWork.drManager.GetById(id);
        }

        // POST api/<controller>
        public void Post([FromBody]Doctor Doctor)
        {
            UnitOfWork.drManager.Add(Doctor);
        }


        // PUT: api/Doctor/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Doctor/5
        public void Delete(int id)
        {
        }
    }
}

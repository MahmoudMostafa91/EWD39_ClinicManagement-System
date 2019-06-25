using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity.Owin;
using back_end.Models;

namespace back_end.Controllers
{

    public class ClinicController : ApiController
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

        [HttpGet]
        public IEnumerable<Clinic> GetSomeClinics()
        {
            return UnitOfWork.ClinicManager.getSomeClinics(4);
        }
        [HttpGet]
        // GET api/<controller>
        public IEnumerable<Clinic> GetClinics()
        {
            //var x = UnitOfWork;
            return UnitOfWork.ClinicManager.GetAll().ToList();
            //return new string[] { "value1", "value2" };
        }


        [HttpGet]
        // GET api/<controller>/5
        public Clinic GetClinicById(int id)
        {
            return UnitOfWork.ClinicManager.GetById(id);
        }

        // POST api/<controller>
        public void AddClinic([FromBody]Clinic clinic)
        {
            UnitOfWork.ClinicManager.Add(clinic);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
using back.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity.Owin;

namespace back.Controllers
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
        
        
        //public ICollection<Clinic> GetClinics()
        //{
        //}

        // GET api/<controller>
        public IEnumerable<Clinic> Get()
        {
            var x = UnitOfWork;
            return UnitOfWork.ClinicManager.GetAll().ToList();
            //return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
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
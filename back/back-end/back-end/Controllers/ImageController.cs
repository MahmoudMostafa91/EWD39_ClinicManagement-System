using back_end.Models;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace back_end.Controllers
{
    public class ImageController : ApiController
    {


        public UnitOfWork UnitOfWork
        {
            get
            {
                HttpContext context = HttpContext.Current;

                return context.GetOwinContext().Get<UnitOfWork>(); ;

            }
        }

        [System.Web.Mvc.HttpPost]
        public async Task<string> Upload()
        {
                HttpContext context = HttpContext.Current;
                var root = context.Server.MapPath("~/Photos");
                var provider =
                new MultipartFormDataStreamProvider(root);
                string frontfilePath = null;

            try
            {

                await Request.Content
                    .ReadAsMultipartAsync(provider);


                foreach (var file in provider.FileData)
                {
                    var name = file.Headers
                        .ContentDisposition
                        .FileName;

                    // remove double quotes from string.
                    name = name.Trim('"');

                    var localFileName = file.LocalFileName;
                    var filePath = Path.Combine(root, name);
                   

                   File.Move(localFileName, filePath);
                   frontfilePath = "http://localhost:51465/Photos/" + name;


                }
          
            }
            catch (Exception e)
            {
                return $"Error: {e.Message}";
            
            }

            return frontfilePath;
        }
    }
}
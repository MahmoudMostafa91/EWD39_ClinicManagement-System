using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace back
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            // Web API configuration and services
            //Camel Case
            config.Formatters.JsonFormatter.SerializerSettings
              .ContractResolver = new CamelCasePropertyNamesContractResolver();

            //CORS Cross-Origin
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);


            config.Formatters.JsonFormatter.SerializerSettings
                .Formatting = Formatting.Indented;

            config.Formatters.JsonFormatter.MediaTypeMappings
                .Add(new QueryStringMapping("type", "json", "application/json"));

            config.Formatters.JsonFormatter.Indent = true;

            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}

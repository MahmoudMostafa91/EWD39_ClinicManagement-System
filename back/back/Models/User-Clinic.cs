using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace back.Models
{
    public class User_Clinic
    {
        public User_Clinic()
        {

        }
        public int Id { get; set; }

        [ForeignKey("ApplicationUser")]
        public string UserFk { get; set; }
        [ForeignKey("Clinic")]
        public int ClinicFk { get; set; }
        public Clinic Clinic { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
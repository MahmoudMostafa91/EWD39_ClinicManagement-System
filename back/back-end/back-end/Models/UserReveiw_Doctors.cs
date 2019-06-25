using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;

namespace back_end.Models
{
    [Table("UserReveiw_Doctors")]
    public class UserReveiw_Doctors
    {
        public int Id { get; set; }

        public double Review { get; set; }

        [ForeignKey("User")]
        public string Patient_Fk { get; set; }

        public ApplicationUser User { get; set; }

        [ForeignKey("Doctor")]
        public int Doctor_Fk { get; set; }

        public Doctor Doctor { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using back_end.Models.Enum;

namespace back_end.Models
{
    [Table("Vital")]
    public class Vital
    {

        public int Id { get; set; }

        public BloodType BloodType { get; set; }
        public string Measurement { get; set; }
        public DateTime Date { get; set; }


        [ForeignKey("Visit")]
        public int Visit_Fk { get; set; }


        public Visit Visit { get; set; }


        [ForeignKey("User")]
        public string Patient_Fk { get; set; }


        public ApplicationUser User { get; set; }


    }
}
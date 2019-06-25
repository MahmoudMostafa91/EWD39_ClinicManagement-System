using back_end.Models.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace back_end.Models
{
    [Table("Medication")]
    public class Medication
    {
        public int Id { get; set; }

        public int Name { get; set; }

        [ForeignKey("Doctor")]
        public int Doctor_Fk { get; set; }

        public Doctor Doctor { get; set; }



        [ForeignKey("Disease")]
        public int Disease_Fk { get; set; }

        public Disease Disease { get; set; }
       


        [ForeignKey("User")]
        public string Patient_Fk { get; set; }

        public ApplicationUser User { get; set; }

        [ForeignKey("Visit")]
        public int Visit_Fk { get; set; }

        public Visit Visit { get; set; }

        public int Times { get; set; }
        public Per Per { get; set; }

        public DateTime Date { get; set; }
        public int Period { get; set; }
        public string Notes { get; set; }




    }
}
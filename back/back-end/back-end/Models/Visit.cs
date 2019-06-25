using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;

namespace back_end.Models
{
    [Table("Visit")]
    public class Visit
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Complaint { get; set; }
        public string Procedure { get; set; }
        public string Diagnosis { get; set; }

        public ICollection<Vital> Vitals { get; set; }
        public ICollection<Medication> Medications { get; set; }





        [ForeignKey("User")]
        public string Patient_Fk { get; set; }

        public ApplicationUser User { get; set; }

        [ForeignKey("Doctor")]
        public int Doctor_Fk { get; set; }

        public Doctor Doctor { get; set; }
    }
}
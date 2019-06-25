using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace back_end.Models
{
    [Table("UserReview_Clinics")]
    public class UserReview_Clinics
    {
        public int Id { get; set; }

        public double Review { get; set; }

        [ForeignKey("User")]
        public string Patient_Fk { get; set; }

        public ApplicationUser User { get; set; }

        [ForeignKey("Clinic")]
        public int Clinic_Fk { get; set; }

        public Clinic Clinic { get; set; }

    }
}
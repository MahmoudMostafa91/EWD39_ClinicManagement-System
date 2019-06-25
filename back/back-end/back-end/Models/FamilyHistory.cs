using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using back_end.Models.Enum;

namespace back_end.Models
{
    [Table("FamilyHistory")]
    public class FamilyHistory
    {
        public int Id { get; set; }
        public string Relative { get; set; }
        public string DiseaseName { get; set; }

        public DiseaseStatus Status { get; set; }

        public string Notes { get; set; }



        [ForeignKey("User")]
        public string Patient_Fk { get; set; }

        public ApplicationUser User { get; set; }

    }
}
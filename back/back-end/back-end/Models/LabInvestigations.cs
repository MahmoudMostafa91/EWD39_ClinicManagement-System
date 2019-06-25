using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using back_end.Models.Enum;

namespace back_end.Models
{
    [Table("LabInvestigations")]
    public class LabInvestigations
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Notes { get; set; }
        public string LabName { get; set; }
        public DateTime Date { get; set; }


        public LabType Type { get; set; }



        [ForeignKey("User")]
        public string Patient_Fk { get; set; }

        public ApplicationUser User { get; set; }

    }
}
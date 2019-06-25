using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using back_end.Models.Enum;

namespace back_end.Models
{
    [Table ("Disease")]
    public class Disease
    {
        public Disease()
        {
            Medications = new HashSet<Medication>();

        }
        public int Id { get; set; }
        public string Name { get; set; }

        [ForeignKey("User")]
        public string Patient_Fk { get; set; }

        public ApplicationUser User { get; set; }
        public DiseaseType Type { get; set; }
        public DateTime InfectionDate { get; set; }
        public DateTime RecoveryDate { get; set; }

      
        public String Hospitilization { get; set; }



        public ICollection<Medication> Medications { get; set; }



    }
}
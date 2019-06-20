using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace back.Models
{
    public class ReservatiopnAppointement
    {
        public ReservatiopnAppointement()
        {

        }
        public int Id { get; set; }
        public DateTime ResAppointement { get; set; }
        [ForeignKey("Doctor")]
        public int DrFk { get; set; }
        public Doctor Doctor { get; set; }
        [ForeignKey("ApplicationUser")]
        public string UserFk { get; set; }
        public ApplicationUser ApplicationUser { get; set; }

    }
}
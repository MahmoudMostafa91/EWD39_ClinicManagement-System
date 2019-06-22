using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace back_end.Models
{
    [Table("AvailableAppointement")]
    public class AvailableAppointement
    {
        public int Id { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public Days Day { get; set; }
        [ForeignKey("Doctor")]
        public int DrFk { get; set; }
        public Doctor Doctor { get; set; }

    }
}
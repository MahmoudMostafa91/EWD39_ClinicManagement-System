using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace back_end.Models
{
    [Table("Operation")]

    public class Operation
    {
        public Operation()
        {

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Desc { get; set; }
        public DateTime Date { get; set; }
        [ForeignKey("Doctor")]
        public int DrFk { get; set; }
        public Doctor Doctor { get; set; }
        [ForeignKey("ApplicationUser")]
        public string UserFk { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
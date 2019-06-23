using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace back_end.Models
{
    public class User_Doctor
    {
        public User_Doctor()
        {

        }
        public int Id { get; set; }

        [ForeignKey("ApplicationUser")]
        public string UserFk { get; set; }
        [ForeignKey("Doctor")]
        public int DrFk { get; set; }
        public Doctor Doctor { get; set; }
        public ApplicationUser ApplicationUser { get; set; }




    }
}
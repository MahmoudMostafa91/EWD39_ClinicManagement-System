using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace back_end.Models
{
    public class Clinic
    {
        public Clinic()
        {
            Doctors = new HashSet<Doctor>();
            //User_Clinics = new HashSet<User_Clinic>();
        }
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public string Description { get; set; }
        public Double? Review { get; set; }

        [Required]
        public string Phone { get; set; }
        [Required]
        public string Address { get; set; }
        public string ImageUrl { get; set; }

        [Required]

        public string Specilization { get; set; }
        [Required]
        [MaxLength(6)]
        public string Password { get; set; }



        public ICollection<Doctor> Doctors { get; set; }
        //public ICollection<User_Clinic> User_Clinics { get; set; }


    }
}
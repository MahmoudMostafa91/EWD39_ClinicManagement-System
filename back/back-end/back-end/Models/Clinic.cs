using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_end.Models
{
    public class Clinic
    {
        public Clinic()
        {
            Doctors = new HashSet<Doctor>();
            User_Clinics = new HashSet<User_Clinic>();
        }
        public int Id { get; set; }
        public string Name { get; set; }

        public string Desc { get; set; }
        public Double Review { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }

        public ICollection<Doctor> Doctors { get; set; }
        public ICollection<User_Clinic> User_Clinics { get; set; }


    }
}
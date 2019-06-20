using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace back.Models
{
    [Table("Doctor")]
    public class Doctor
    {
        public Doctor()
        {
            AvailableAppointements = new HashSet<AvailableAppointement>();
            ReservatiopnAppointements = new HashSet<ReservatiopnAppointement>();
            Operations = new HashSet<Operation>();
            User_Doctors = new HashSet<User_Doctor>();

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string spectialisation { get; set; }
        [ForeignKey("Clinic")]
        public int ClinicfK { get; set; }
        public Clinic Clinic { get; set; }
        public ICollection<AvailableAppointement> AvailableAppointements { get; set; }
        public ICollection<ReservatiopnAppointement> ReservatiopnAppointements { get; set; }
   
        public ICollection<Operation> Operations { get; set; }
        public ICollection<User_Doctor> User_Doctors { get; set; }

    }
}

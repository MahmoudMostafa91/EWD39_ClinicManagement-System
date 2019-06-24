using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using back_end.Models.Enum;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace back_end.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            Operations = new HashSet<Operation>();
            ReservatiopnAppointements = new HashSet<ReservatiopnAppointement>();
            User_Clinics = new HashSet<User_Clinic>();
            User_Doctors = new HashSet<User_Doctor>();
        }
        public string Name { get; set; }
        public string ImageUrl { get; set; }

        public DateTime BirthDate { get; set; }

        public Gender Gender { get; set; }

        public BloodType BloodType { get; set; }


        public virtual ICollection<Operation> Operations { get; set; }
        public virtual ICollection<ReservatiopnAppointement> ReservatiopnAppointements { get; set; }
        public virtual ICollection<User_Clinic> User_Clinics { get; set; }
        public virtual ICollection<User_Doctor> User_Doctors { get; set; }



        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("Dr-Care", throwIfV1Schema: false)
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
        public virtual DbSet<Clinic> Clinics{ get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Operation> Operations { get; set; }
        public virtual DbSet<ReservatiopnAppointement> ReservatiopnAppointements { get; set; }
        public virtual DbSet<AvailableAppointement> AvailableAppointements { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class test : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.UserReveiw_Doctors",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Review = c.Double(nullable: false),
                        Patient_Fk = c.String(maxLength: 128),
                        Doctor_Fk = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Doctor", t => t.Doctor_Fk, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.Patient_Fk)
                .Index(t => t.Patient_Fk)
                .Index(t => t.Doctor_Fk);
            
            CreateTable(
                "dbo.UserReview_Clinics",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Review = c.Double(nullable: false),
                        Patient_Fk = c.String(maxLength: 128),
                        Clinic_Fk = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Clinics", t => t.Clinic_Fk, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.Patient_Fk)
                .Index(t => t.Patient_Fk)
                .Index(t => t.Clinic_Fk);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.UserReview_Clinics", "Patient_Fk", "dbo.AspNetUsers");
            DropForeignKey("dbo.UserReview_Clinics", "Clinic_Fk", "dbo.Clinics");
            DropForeignKey("dbo.UserReveiw_Doctors", "Patient_Fk", "dbo.AspNetUsers");
            DropForeignKey("dbo.UserReveiw_Doctors", "Doctor_Fk", "dbo.Doctor");
            DropIndex("dbo.UserReview_Clinics", new[] { "Clinic_Fk" });
            DropIndex("dbo.UserReview_Clinics", new[] { "Patient_Fk" });
            DropIndex("dbo.UserReveiw_Doctors", new[] { "Doctor_Fk" });
            DropIndex("dbo.UserReveiw_Doctors", new[] { "Patient_Fk" });
            DropTable("dbo.UserReview_Clinics");
            DropTable("dbo.UserReveiw_Doctors");
        }
    }
}

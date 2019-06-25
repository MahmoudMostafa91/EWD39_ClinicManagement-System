namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addMedicationTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Medication",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.Int(nullable: false),
                        Doctor_Fk = c.Int(nullable: false),
                        Clinic_Fk = c.Int(nullable: false),
                        Disease_Fk = c.Int(nullable: false),
                        Patient_Fk = c.String(maxLength: 128),
                        Times = c.Int(nullable: false),
                        Per = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                        Period = c.Int(nullable: false),
                        Notes = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Clinics", t => t.Clinic_Fk, cascadeDelete: true)
                .ForeignKey("dbo.Disease", t => t.Disease_Fk, cascadeDelete: true)
                .ForeignKey("dbo.Doctor", t => t.Doctor_Fk, cascadeDelete: false)
                .ForeignKey("dbo.AspNetUsers", t => t.Patient_Fk)
                .Index(t => t.Doctor_Fk)
                .Index(t => t.Clinic_Fk)
                .Index(t => t.Disease_Fk)
                .Index(t => t.Patient_Fk);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Medication", "Patient_Fk", "dbo.AspNetUsers");
            DropForeignKey("dbo.Medication", "Doctor_Fk", "dbo.Doctor");
            DropForeignKey("dbo.Medication", "Disease_Fk", "dbo.Disease");
            DropForeignKey("dbo.Medication", "Clinic_Fk", "dbo.Clinics");
            DropIndex("dbo.Medication", new[] { "Patient_Fk" });
            DropIndex("dbo.Medication", new[] { "Disease_Fk" });
            DropIndex("dbo.Medication", new[] { "Clinic_Fk" });
            DropIndex("dbo.Medication", new[] { "Doctor_Fk" });
            DropTable("dbo.Medication");
        }
    }
}

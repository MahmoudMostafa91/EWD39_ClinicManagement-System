namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addFamilyHistoryandVitalTables : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.FamilyHistory",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Relative = c.String(),
                        DiseaseName = c.String(),
                        Status = c.Int(nullable: false),
                        Notes = c.String(),
                        Patient_Fk = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.Patient_Fk)
                .Index(t => t.Patient_Fk);
            
            CreateTable(
                "dbo.Vital",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BloodType = c.Int(nullable: false),
                        Measurement = c.String(),
                        Date = c.DateTime(nullable: false),
                        Patient_Fk = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.Patient_Fk)
                .Index(t => t.Patient_Fk);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Vital", "Patient_Fk", "dbo.AspNetUsers");
            DropForeignKey("dbo.FamilyHistory", "Patient_Fk", "dbo.AspNetUsers");
            DropIndex("dbo.Vital", new[] { "Patient_Fk" });
            DropIndex("dbo.FamilyHistory", new[] { "Patient_Fk" });
            DropTable("dbo.Vital");
            DropTable("dbo.FamilyHistory");
        }
    }
}

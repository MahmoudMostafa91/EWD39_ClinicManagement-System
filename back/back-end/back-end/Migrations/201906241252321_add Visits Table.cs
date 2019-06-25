namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addVisitsTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Visit",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Date = c.DateTime(nullable: false),
                        Complaint = c.String(),
                        Procedure = c.String(),
                        Diagnosis = c.String(),
                        Patient_Fk = c.String(maxLength: 128),
                        Doctor_Fk = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Doctor", t => t.Doctor_Fk, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.Patient_Fk)
                .Index(t => t.Patient_Fk)
                .Index(t => t.Doctor_Fk);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Visit", "Patient_Fk", "dbo.AspNetUsers");
            DropForeignKey("dbo.Visit", "Doctor_Fk", "dbo.Doctor");
            DropIndex("dbo.Visit", new[] { "Doctor_Fk" });
            DropIndex("dbo.Visit", new[] { "Patient_Fk" });
            DropTable("dbo.Visit");
        }
    }
}

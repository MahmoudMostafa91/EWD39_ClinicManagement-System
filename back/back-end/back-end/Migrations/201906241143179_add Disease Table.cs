namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addDiseaseTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Disease",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Patient_Fk = c.String(maxLength: 128),
                        Type = c.Int(nullable: false),
                        InfectionDate = c.DateTime(nullable: false),
                        RecoveryDate = c.DateTime(nullable: false),
                        Hospitilization = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.Patient_Fk)
                .Index(t => t.Patient_Fk);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Disease", "Patient_Fk", "dbo.AspNetUsers");
            DropIndex("dbo.Disease", new[] { "Patient_Fk" });
            DropTable("dbo.Disease");
        }
    }
}

namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addLabTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.LabInvestigations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        ImageUrl = c.String(),
                        Notes = c.String(),
                        Patient_Fk = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.Patient_Fk)
                .Index(t => t.Patient_Fk);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.LabInvestigations", "Patient_Fk", "dbo.AspNetUsers");
            DropIndex("dbo.LabInvestigations", new[] { "Patient_Fk" });
            DropTable("dbo.LabInvestigations");
        }
    }
}

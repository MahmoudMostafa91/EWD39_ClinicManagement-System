namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class editMedicationTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Medication", "Clinic_Fk", "dbo.Clinics");
            DropIndex("dbo.Medication", new[] { "Clinic_Fk" });
            DropColumn("dbo.Medication", "Clinic_Fk");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Medication", "Clinic_Fk", c => c.Int(nullable: false));
            CreateIndex("dbo.Medication", "Clinic_Fk");
            AddForeignKey("dbo.Medication", "Clinic_Fk", "dbo.Clinics", "Id", cascadeDelete: true);
        }
    }
}

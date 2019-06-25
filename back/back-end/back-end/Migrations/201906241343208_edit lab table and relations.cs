namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class editlabtableandrelations : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.LabInvestigations", "LabName", c => c.String());
            AddColumn("dbo.LabInvestigations", "Date", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.LabInvestigations", "Date");
            DropColumn("dbo.LabInvestigations", "LabName");
        }
    }
}

namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addtypecolumninlabtable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.LabInvestigations", "Type", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.LabInvestigations", "Type");
        }
    }
}

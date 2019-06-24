namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class editdoctortableaddmorecolumns : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Doctor", "Degree", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Doctor", "Degree");
        }
    }
}

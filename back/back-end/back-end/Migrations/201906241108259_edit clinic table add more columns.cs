namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class editclinictableaddmorecolumns : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Clinics", "ImageUrl", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Clinics", "ImageUrl");
        }
    }
}

namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addnamecoloumntoclinictable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Clinics", "Name", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Clinics", "Name");
        }
    }
}

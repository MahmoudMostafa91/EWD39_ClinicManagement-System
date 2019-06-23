namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addpasscolumntoclinictable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Clinics", "Password", c => c.String());
            AlterColumn("dbo.Clinics", "Review", c => c.Double());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Clinics", "Review", c => c.Double(nullable: false));
            DropColumn("dbo.Clinics", "Password");
        }
    }
}

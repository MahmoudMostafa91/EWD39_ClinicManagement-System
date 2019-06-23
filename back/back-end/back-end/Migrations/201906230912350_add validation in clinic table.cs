namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addvalidationinclinictable : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Clinics", "Name", c => c.String(nullable: false));
            AlterColumn("dbo.Clinics", "Phone", c => c.String(nullable: false));
            AlterColumn("dbo.Clinics", "Address", c => c.String(nullable: false));
            AlterColumn("dbo.Clinics", "Specialization", c => c.String(nullable: false));
            AlterColumn("dbo.Clinics", "Password", c => c.String(nullable: false, maxLength: 6));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Clinics", "Password", c => c.String());
            AlterColumn("dbo.Clinics", "Specialization", c => c.String());
            AlterColumn("dbo.Clinics", "Address", c => c.String());
            AlterColumn("dbo.Clinics", "Phone", c => c.String());
            AlterColumn("dbo.Clinics", "Name", c => c.String());
        }
    }
}

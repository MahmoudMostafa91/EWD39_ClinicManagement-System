namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class editspecilizationcolumninclinictable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Clinics", "specilization", c => c.String(nullable: false));
            DropColumn("dbo.Clinics", "Specialization");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Clinics", "Specialization", c => c.String(nullable: false));
            DropColumn("dbo.Clinics", "specilization");
        }
    }
}

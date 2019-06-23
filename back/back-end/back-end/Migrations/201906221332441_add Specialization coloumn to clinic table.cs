namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addSpecializationcoloumntoclinictable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Clinics", "Specialization", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Clinics", "Specialization");
        }
    }
}

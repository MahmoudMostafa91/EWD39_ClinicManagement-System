namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class editdesccolumninclinictable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Clinics", "description", c => c.String());
            DropColumn("dbo.Clinics", "Desc");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Clinics", "Desc", c => c.String());
            DropColumn("dbo.Clinics", "description");
        }
    }
}

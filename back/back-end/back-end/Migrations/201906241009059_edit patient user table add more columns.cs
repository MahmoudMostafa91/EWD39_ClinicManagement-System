namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class editpatientusertableaddmorecolumns : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "BirthDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.AspNetUsers", "Gender", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "BloodType", c => c.Int(nullable: false));
            DropColumn("dbo.AspNetUsers", "FamilyHistory");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "FamilyHistory", c => c.String());
            DropColumn("dbo.AspNetUsers", "BloodType");
            DropColumn("dbo.AspNetUsers", "Gender");
            DropColumn("dbo.AspNetUsers", "BirthDate");
        }
    }
}

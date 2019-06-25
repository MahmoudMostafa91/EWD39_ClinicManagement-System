namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class editnullablecolinusertable : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.AspNetUsers", "BirthDate", c => c.DateTime());
            AlterColumn("dbo.AspNetUsers", "Gender", c => c.Int());
            AlterColumn("dbo.AspNetUsers", "BloodType", c => c.Int());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.AspNetUsers", "BloodType", c => c.Int(nullable: false));
            AlterColumn("dbo.AspNetUsers", "Gender", c => c.Int(nullable: false));
            AlterColumn("dbo.AspNetUsers", "BirthDate", c => c.DateTime(nullable: false));
        }
    }
}

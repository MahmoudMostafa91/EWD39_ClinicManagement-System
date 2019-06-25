namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addvitalrelations : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Vital", "Visit_Fk", c => c.Int(nullable: false));
            CreateIndex("dbo.Vital", "Visit_Fk");
            AddForeignKey("dbo.Vital", "Visit_Fk", "dbo.Visit", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Vital", "Visit_Fk", "dbo.Visit");
            DropIndex("dbo.Vital", new[] { "Visit_Fk" });
            DropColumn("dbo.Vital", "Visit_Fk");
        }
    }
}

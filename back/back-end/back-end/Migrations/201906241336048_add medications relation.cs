namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addmedicationsrelation : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Medication", "Visit_Fk", c => c.Int(nullable: false));
            CreateIndex("dbo.Medication", "Visit_Fk");
            AddForeignKey("dbo.Medication", "Visit_Fk", "dbo.Visit", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Medication", "Visit_Fk", "dbo.Visit");
            DropIndex("dbo.Medication", new[] { "Visit_Fk" });
            DropColumn("dbo.Medication", "Visit_Fk");
        }
    }
}

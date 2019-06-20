namespace back.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateRelation : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.User_Clinic",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserFk = c.String(maxLength: 128),
                        ClinicFk = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserFk)
                .ForeignKey("dbo.Clinics", t => t.ClinicFk, cascadeDelete: true)
                .Index(t => t.UserFk)
                .Index(t => t.ClinicFk);
            
            CreateTable(
                "dbo.User_Doctor",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserFk = c.String(maxLength: 128),
                        DrFk = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserFk)
                .ForeignKey("dbo.Doctor", t => t.DrFk, cascadeDelete: true)
                .Index(t => t.UserFk)
                .Index(t => t.DrFk);
            
            AddColumn("dbo.AvailableAppointement", "DrFk", c => c.Int(nullable: false));
            AddColumn("dbo.Doctor", "ClinicfK", c => c.Int(nullable: false));
            AddColumn("dbo.Operation", "DrFk", c => c.Int(nullable: false));
            AddColumn("dbo.Operation", "UserFk", c => c.String(maxLength: 128));
            AddColumn("dbo.ReservatiopnAppointements", "DrFk", c => c.Int(nullable: false));
            AddColumn("dbo.ReservatiopnAppointements", "UserFk", c => c.String(maxLength: 128));
            CreateIndex("dbo.AvailableAppointement", "DrFk");
            CreateIndex("dbo.Doctor", "ClinicfK");
            CreateIndex("dbo.Operation", "DrFk");
            CreateIndex("dbo.Operation", "UserFk");
            CreateIndex("dbo.ReservatiopnAppointements", "DrFk");
            CreateIndex("dbo.ReservatiopnAppointements", "UserFk");
            AddForeignKey("dbo.Operation", "UserFk", "dbo.AspNetUsers", "Id");
            AddForeignKey("dbo.Operation", "DrFk", "dbo.Doctor", "Id", cascadeDelete: true);
            AddForeignKey("dbo.ReservatiopnAppointements", "UserFk", "dbo.AspNetUsers", "Id");
            AddForeignKey("dbo.ReservatiopnAppointements", "DrFk", "dbo.Doctor", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Doctor", "ClinicfK", "dbo.Clinics", "Id", cascadeDelete: true);
            AddForeignKey("dbo.AvailableAppointement", "DrFk", "dbo.Doctor", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AvailableAppointement", "DrFk", "dbo.Doctor");
            DropForeignKey("dbo.Doctor", "ClinicfK", "dbo.Clinics");
            DropForeignKey("dbo.User_Clinic", "ClinicFk", "dbo.Clinics");
            DropForeignKey("dbo.User_Clinic", "UserFk", "dbo.AspNetUsers");
            DropForeignKey("dbo.User_Doctor", "DrFk", "dbo.Doctor");
            DropForeignKey("dbo.User_Doctor", "UserFk", "dbo.AspNetUsers");
            DropForeignKey("dbo.ReservatiopnAppointements", "DrFk", "dbo.Doctor");
            DropForeignKey("dbo.ReservatiopnAppointements", "UserFk", "dbo.AspNetUsers");
            DropForeignKey("dbo.Operation", "DrFk", "dbo.Doctor");
            DropForeignKey("dbo.Operation", "UserFk", "dbo.AspNetUsers");
            DropIndex("dbo.User_Doctor", new[] { "DrFk" });
            DropIndex("dbo.User_Doctor", new[] { "UserFk" });
            DropIndex("dbo.ReservatiopnAppointements", new[] { "UserFk" });
            DropIndex("dbo.ReservatiopnAppointements", new[] { "DrFk" });
            DropIndex("dbo.Operation", new[] { "UserFk" });
            DropIndex("dbo.Operation", new[] { "DrFk" });
            DropIndex("dbo.User_Clinic", new[] { "ClinicFk" });
            DropIndex("dbo.User_Clinic", new[] { "UserFk" });
            DropIndex("dbo.Doctor", new[] { "ClinicfK" });
            DropIndex("dbo.AvailableAppointement", new[] { "DrFk" });
            DropColumn("dbo.ReservatiopnAppointements", "UserFk");
            DropColumn("dbo.ReservatiopnAppointements", "DrFk");
            DropColumn("dbo.Operation", "UserFk");
            DropColumn("dbo.Operation", "DrFk");
            DropColumn("dbo.Doctor", "ClinicfK");
            DropColumn("dbo.AvailableAppointement", "DrFk");
            DropTable("dbo.User_Doctor");
            DropTable("dbo.User_Clinic");
        }
    }
}

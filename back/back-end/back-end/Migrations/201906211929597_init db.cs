namespace back_end.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initdb : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AvailableAppointement",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        From = c.Int(nullable: false),
                        To = c.Int(nullable: false),
                        Day = c.Int(nullable: false),
                        DrFk = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Doctor", t => t.DrFk, cascadeDelete: true)
                .Index(t => t.DrFk);
            
            CreateTable(
                "dbo.Doctor",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        ImageUrl = c.String(),
                        spectialisation = c.String(),
                        ClinicfK = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Clinics", t => t.ClinicfK, cascadeDelete: true)
                .Index(t => t.ClinicfK);
            
            CreateTable(
                "dbo.Clinics",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Desc = c.String(),
                        Review = c.Double(nullable: false),
                        Phone = c.String(),
                        Address = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
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
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        ImageUrl = c.String(),
                        FamilyHistory = c.String(),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.Operation",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Desc = c.String(),
                        Date = c.DateTime(nullable: false),
                        DrFk = c.Int(nullable: false),
                        UserFk = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserFk)
                .ForeignKey("dbo.Doctor", t => t.DrFk, cascadeDelete: true)
                .Index(t => t.DrFk)
                .Index(t => t.UserFk);
            
            CreateTable(
                "dbo.ReservatiopnAppointements",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ResAppointement = c.DateTime(nullable: false),
                        DrFk = c.Int(nullable: false),
                        UserFk = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserFk)
                .ForeignKey("dbo.Doctor", t => t.DrFk, cascadeDelete: true)
                .Index(t => t.DrFk)
                .Index(t => t.UserFk);
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
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
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.AvailableAppointement", "DrFk", "dbo.Doctor");
            DropForeignKey("dbo.Doctor", "ClinicfK", "dbo.Clinics");
            DropForeignKey("dbo.User_Clinic", "ClinicFk", "dbo.Clinics");
            DropForeignKey("dbo.User_Clinic", "UserFk", "dbo.AspNetUsers");
            DropForeignKey("dbo.User_Doctor", "DrFk", "dbo.Doctor");
            DropForeignKey("dbo.User_Doctor", "UserFk", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.ReservatiopnAppointements", "DrFk", "dbo.Doctor");
            DropForeignKey("dbo.ReservatiopnAppointements", "UserFk", "dbo.AspNetUsers");
            DropForeignKey("dbo.Operation", "DrFk", "dbo.Doctor");
            DropForeignKey("dbo.Operation", "UserFk", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropIndex("dbo.User_Doctor", new[] { "DrFk" });
            DropIndex("dbo.User_Doctor", new[] { "UserFk" });
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.ReservatiopnAppointements", new[] { "UserFk" });
            DropIndex("dbo.ReservatiopnAppointements", new[] { "DrFk" });
            DropIndex("dbo.Operation", new[] { "UserFk" });
            DropIndex("dbo.Operation", new[] { "DrFk" });
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.User_Clinic", new[] { "ClinicFk" });
            DropIndex("dbo.User_Clinic", new[] { "UserFk" });
            DropIndex("dbo.Doctor", new[] { "ClinicfK" });
            DropIndex("dbo.AvailableAppointement", new[] { "DrFk" });
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.User_Doctor");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.ReservatiopnAppointements");
            DropTable("dbo.Operation");
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.User_Clinic");
            DropTable("dbo.Clinics");
            DropTable("dbo.Doctor");
            DropTable("dbo.AvailableAppointement");
        }
    }
}

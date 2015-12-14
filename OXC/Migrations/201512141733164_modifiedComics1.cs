namespace OXC.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class modifiedComics1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Comics", "Release", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Comics", "Release");
        }
    }
}

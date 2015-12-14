namespace OXC.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatedmodel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Comics", "Issue", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Comics", "Issue");
        }
    }
}

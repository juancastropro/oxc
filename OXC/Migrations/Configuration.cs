namespace OXC.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;

    internal sealed class Configuration : DbMigrationsConfiguration<OXC.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(OXC.Models.ApplicationDbContext context)
        {
            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            // Ensure Juan
            var user1 = userManager.FindByName("juancastro@oxccomics.com");
            if (user1 == null)
            {
                // create user
                user1 = new ApplicationUser
                {
                    UserName = "juancastro@oxccomics.com",
                    Email = "juancastro@oxccomics.com"
                };
                userManager.Create(user1, "Secret123!");

                // add claims
                userManager.AddClaim(user1.Id, new Claim("CanAddComics", "true"));
            }

            // Ensure Julie
            var user2 = userManager.FindByName("juliegomez@oxccomics.com");
            if (user2 == null)
            {
                // create user
                user2 = new ApplicationUser
                {
                    UserName = "juliegomez@oxccomics.com",
                    Email = "juliegomez@oxccomics.com"
                };
                userManager.Create(user2, "Secret123!");

                // add claims
                userManager.AddClaim(user2.Id, new Claim("CanAddComics", "true"));
            }
        }
    }
}

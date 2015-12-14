using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OXC.Models
{
    public class EFRepository : IRepository {

        private ApplicationDbContext _db = new ApplicationDbContext();

        public IList<Comic> ListComics()
        {
            return _db.Comics.ToList();
        }

        public void SaveComic(Comic comicToSave)
        {
            if (comicToSave.Id == 0)
            {
                _db.Comics.Add(comicToSave);
                _db.SaveChanges();
            }
            else
            {
                var original = this.Find(comicToSave.Id);
                original.Title = comicToSave.Title;
                original.Issue = comicToSave.Issue;
                original.Writer = comicToSave.Writer;
                original.Artist = comicToSave.Artist;
                original.Release = comicToSave.Release;
                _db.SaveChanges();
            }
        }

        public Comic Find(int id)
        {
            return _db.Comics.Find(id);
        }

        public void Delete(int id)
        {
            var comic = this.Find(id);
            _db.Comics.Remove(comic);
            _db.SaveChanges();
        }

    }
}
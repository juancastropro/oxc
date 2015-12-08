using System.Collections.Generic;

namespace OXC.Models
{
    public interface IRepository
    {
        void Delete(int id);
        Comic Find(int id);
        IList<Comic> ListComics();
        void SaveComic(Comic comicToSave);
    }
}
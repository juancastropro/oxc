using OXC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OXC.API
{
    public class ComicsController : ApiController
    {
        private IRepository _repo;

        public ComicsController(IRepository repo)
        {
            this._repo = repo;
        }

        public IEnumerable<Comic> Get()
        {
            var comics = _repo.ListComics();
            return comics;
        }

        public IHttpActionResult Post(Comic comic)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }

            _repo.SaveComic(comic);

            return Created("", comic);
        }

        public IHttpActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }

        public IHttpActionResult Get(int id)
        {
            var comic = _repo.Find(id);
            if (comic == null)
            {
                return NotFound();
            }
            return Ok(comic);
        }

    }
}

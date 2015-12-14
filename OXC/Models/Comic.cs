using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OXC.Models
{
    public class Comic
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Issue { get; set; }
        public string Writer { get; set; }
        public string Artist { get; set; }
        //public DateTime Date { get; set; }
    }
}
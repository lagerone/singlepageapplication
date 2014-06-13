using System.Collections.Generic;
using System.Linq;
using SinglePageApplication.Web.Controllers.Api;
using SinglePageApplication.Web.Models;

namespace SinglePageApplication.Web.Repositories
{
    public class NinjaRepository : INinjaRepository
    {
        private static readonly IEnumerable<Ninja> _ninjas = new[]
        {
            new Ninja {Id = "martin-thern", Name = "Martin Thern", Description = "I like cats and beer."},
            new Ninja {Id = "emy-spjuth", Name = "Emy Spjuth", Description = "I like flowers."},
            new Ninja {Id = "daniel-lager", Name = "Daniel Lager", Description = "I don't like dogs."}
        };

        public IEnumerable<Ninja> GetAllNinjas()
        {
            return _ninjas;
        }

        public Ninja GetNinja(string id)
        {
            return _ninjas.Single(n => n.Id == id);
        }
    }
}
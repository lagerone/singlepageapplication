using System.Collections.Generic;
using SinglePageApplication.Web.Controllers.Api;
using SinglePageApplication.Web.Models;

namespace SinglePageApplication.Web.Repositories
{
    public interface INinjaRepository
    {
        IEnumerable<Ninja> GetAllNinjas();
        Ninja GetNinja(string id);
    }
}
using System.Collections.Generic;
using System.Web.Http;
using SinglePageApplication.Web.Models;
using SinglePageApplication.Web.Repositories;

namespace SinglePageApplication.Web.Controllers.Api
{
    public class NinjasController : ApiController
    {
        private readonly INinjaRepository _ninjaRepository;

        public NinjasController(INinjaRepository ninjaRepository)
        {
            _ninjaRepository = ninjaRepository;
        }

        public IEnumerable<Ninja> Get()
        {
            return _ninjaRepository.GetAllNinjas();
        }

        public Ninja Get(string id)
        {
            return _ninjaRepository.GetNinja(id);
        }

        public Ninja Post(MessagePostModel model)
        {
            var ninja = _ninjaRepository.GetNinja(model.Id);

            ninja.Messages.Add(new NinjaMessage { Message = model.Message, DateAdded = model.DateAdded });

            return ninja;
        }
    }
}
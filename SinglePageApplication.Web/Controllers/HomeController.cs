using System.Web.Mvc;
using SinglePageApplication.Web.Models;

namespace SinglePageApplication.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(bool isDebug = false)
        {
            var viewModel = new ViewModel { IsDebug = isDebug };
#if DEBUG
            viewModel.IsDebug = true;
#endif
            return View(viewModel);
        }
    }
}
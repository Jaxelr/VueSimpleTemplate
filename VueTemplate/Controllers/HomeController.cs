using Microsoft.AspNetCore.Mvc;

namespace VueTemplate.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
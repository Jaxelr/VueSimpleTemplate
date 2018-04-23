using Microsoft.AspNetCore.Mvc;

namespace VueTemplate.Controllers
{
    public class MainController : Controller
    {
        public IActionResult Index() => View();

        public IActionResult Error() => View();
    }
}

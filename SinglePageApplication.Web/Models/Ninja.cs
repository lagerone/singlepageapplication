using System.Collections.Generic;

namespace SinglePageApplication.Web.Models
{
    public class Ninja
    {
        public Ninja()
        {
            Messages =  new List<NinjaMessage>();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public IList<NinjaMessage> Messages { get; set; }

        public string ImageUrl
        {
            get { return "http://tretton37.com/App_Sprites/meet/meet-" + Id + ".png"; }
        }
    }
}
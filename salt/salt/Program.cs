using System;
using System.Html;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

using KnockoutApi;
namespace salt
{
    public class Program
    {
        public string C { get; set; }
        public Program()
        {
            this.C = "qqqqqqqq";
        }

        static void Main()
        {
            Program ob = new Program();
            ob.C = "qwe";
            Window.Alert("Done");
            var A = Knockout.Observable("asd");
            var B = 333;
            Knockout.ApplyBindings(new Program());

        }

    }
}

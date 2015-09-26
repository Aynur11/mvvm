using System;
using System.Html;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Collections.ObjectModel;
using KnockoutApi; 

namespace SharpCode
{
    public class ViewModel
    {
        public Observable<string> firstName = Knockout.Observable<string>("qwerty");
        public ViewModel()
        {
            this.firstName = Knockout.Observable("123");
        }
    }

    public class Program
    {
        static void Main()
        {
            ViewModel vm = new ViewModel();
            Knockout.ApplyBindings(vm);
        }
    }
}
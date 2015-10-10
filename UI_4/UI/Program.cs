using System;
using System.Html;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Collections.ObjectModel;
using KnockoutApi;

namespace UI
{
    public class ViewModel
    {
        public Observable<int> a = Knockout.Observable<int>(0);
        public Observable<int> b = Knockout.Observable<int>(0);
        public Observable<int> result = Knockout.Observable<int>(0);
        public Observable<string> str = Knockout.Observable<string>("66 /n 4");

        public Observable<int> compute()
        {
            result.Value = a.Value + b.Value;
            return result;
        }
        public ViewModel()
        {
        }
    }
    class Program
    {
        static void Main()
        {
        }
    }
}

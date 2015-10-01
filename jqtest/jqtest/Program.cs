using System;
using System.Html;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Collections.ObjectModel;
using KnockoutApi;

namespace SharpCode
{
    public class Calculations
    {
        public int a = 7;
        public int b = 3;
        public int c = 0;
        public int multipl()
        {
            c = a * b;
            return c;
        }
    }

    public class ViewModel
    {
        public Observable<int> a = Knockout.Observable<int>(7);
        public Observable<int> b = Knockout.Observable<int>(3);
        public Observable<int> result = Knockout.Observable<int>(0);
        Calculations calc = new Calculations();
        public Observable<int> multiplicate()
        {
            result.Value = calc.multipl();
            return result;
        }

        public Observable<int> compute()
        {
            result.Value = a.Value + b.Value ;
            return result;
        }
        public ViewModel()
        {
        }
    }

    public class Program
    {
        static void Main()
        {
        }
    }
};
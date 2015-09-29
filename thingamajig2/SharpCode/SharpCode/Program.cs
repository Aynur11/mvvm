using System;
using System.Html;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Collections.ObjectModel;
using KnockoutApi; 

namespace SharpCode
{
    public class Computing
    {
        public Observable<int> result = Knockout.Observable<int>();
        public int computeHandler1(Observable<int> aa, Observable<int> bb)
        {
            result.Value = aa.Value + bb.Value;
            return result.Value;
        }
        public Observable<int> computeHandler2(Observable<int> aa, Observable<int> bb)
        {
            result.Value = aa.Value + bb.Value;
            return result;
        }
    }

    public class ViewModel
    {
        public Observable<string> firstName = Knockout.Observable<string>("qwerty");
        public Observable<int> a = Knockout.Observable<int>(7);
        public Observable<int> b = Knockout.Observable<int>(2);
        public Observable<int> r = Knockout.Observable<int>();
        public int computeHandler()
        {
            r.Value = a.Value + b.Value;
            return r.Value;
        }
        public Observable<int> computeHandler3()
        {
            r.Value = a.Value + b.Value;
            return r;
        }
        
        
        public ViewModel()
        {
            firstName = Knockout.Observable("123");
        }
    }

    public class Program
    {
        static void Main()
        {
            /*
           ViewModel vm = new ViewModel();
           vm.computeHandler();
           Computing calc = new Computing();
           calc.computeHandler2(vm.a, vm.b);
           vm.computeHandler3();
            */
            //
            //vm.computeHandler(vm.a, vm.b);
            //vm.result.Value = vm.a.Value + vm.b.Value;
            //Knockout.ApplyBindings(vm);
        }
    }
    
};
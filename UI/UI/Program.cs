using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KnockoutApi;

namespace UI
{
    class Program
    {
        public class ViewModel
        {
            public Observable<int> a = Knockout.Observable<int>(0);
            public Observable<int> b = Knockout.Observable<int>(0);
            public Observable<int> result = Knockout.Observable<int>(0);
            

            public Observable<int> compute()
            {
                result.Value = a.Value + b.Value;
                return result;
            }
            public ViewModel()
            {
            }
        }
        static void Main()
        {
        }
    }
}

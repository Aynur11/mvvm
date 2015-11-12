using System;
using System.Html;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Collections.ObjectModel;
using KnockoutApi;

/*
using System.Windows.Threading.DispatcherObject;
using System.Windows.DependencyObject;
using System.Windows.Media.Visual;
using System.Windows.Media.ContainerVisual;
using System.Windows.Media.DrawingVisual;
*/
namespace UI
{
    public class PointViewModel
    {
        public Int32 chart1X = 33;
        public Int32 chart1Y = 99;
        public Int32 chart2X = 33;
        public Int32 chart2Y = 99;
        public Int32 chart3X = 33;
        public Int32 chart3Y = 99;
        public Int32 chart4X = 33;
        public Int32 chart4Y = 99;
        public Int32 chart5X = 33;
        public Int32 chart5Y = 99;
        public Int32 chart6X = 33;
        public Int32 chart6Y = 99;
    }
    public class ModuleViewModel
    {
        public String Name;
        public String Color;
        public List<BlockViewModel> BlockData;
    }
    public class BlockViewModel
    {
        public String Name;
        public List<PointViewModel> Points;
        public bool CheckedItem;
    }

    public class ColumnModel
    {
        public String map;
        public String Name;
        public String type { get; set; }
        //public double Width;
    }
    public class StringColumn : ColumnModel
    {
        public String type1
        {
            get { return type; }
            set { this.type = "string"; }
        }
    }
    public class DoubleColumn : ColumnModel
    {
        public String type2
        {
            get { return type; }
            set { this.type = "number"; }
        }
    }
    public class WellSurveyItem
    {
        public double Zenith;
        public double Azimuth;
        public double MeasuredDepth;
    }
    public class WellSurveyItemViewModel
    {
        /*
        public Observable<double> Z = Knockout.Observable<double>(35);
        public Observable<double> A = Knockout.Observable<double>(7);
        public Observable<double> MD = Knockout.Observable<double>(47);
         */
        public double Z = 35;
        public double A = 7;
        public double MD = 47;
    }
    public class TableViewModel
    {
        public List<ColumnModel> Columns;
        public ObservableArray<WellSurveyItemViewModel> Data;
        public ObservableArray<WellSurveyItemViewModel> Data2;
        /*
        private IEnumerable<WellSurveyItemViewModel> GetCoords(double startAngle)
        {
            var points = new List<WellSurveyItemViewModel>();
            var x = 0d;
            var y = 0d;
            var z = 0d;
            var measuredDepth = 0.0;
            foreach (var item in Data)
            {
                var vector; 
            }
        }
         */
        public TableViewModel()
        {
            Columns = new List<ColumnModel>();
            Columns.Add(new ColumnModel
                {
                    Name = "z",
                    type = "number"
                });
            Columns.Add(new ColumnModel
                {
                    Name = "a",
                    type = "number"
                });
            Columns.Add(new ColumnModel
                {
                    Name = "MD",
                    type = "number"
                });
            Data = new ObservableArray<WellSurveyItemViewModel>();
            Data.Push(new WellSurveyItemViewModel
                {
                    Z = 0,
                    A = 0,
                    MD = 0,
                });
            Data.Push(new WellSurveyItemViewModel
                {
                    Z = 10,
                    A = 10,
                    MD = 10
                });
            Data.Push(new WellSurveyItemViewModel
                {
                    Z = 20,
                    A = 15,
                    MD = 30
                });
            Data.Push(new WellSurveyItemViewModel
                {
                    Z = 10,
                    A = 30,
                    MD = 60
                });
            Data.Push(new WellSurveyItemViewModel
                {
                    Z = 10,
                    A = 60,
                    MD = 70
                });
            //Data2.Splice(0, 4);
        }

        public ObservableArray<WellSurveyItemViewModel> GetTableData()
        {
            return Data; 
        }
        /*
        public ObservableArray<WellSurveyItemViewModel> TransferData()
        {
            Data2.Splice(0,4);
            return Data2;
        }
        */
    }
    public class DashboardViewModel
    {
        public List<ModuleViewModel> modules;
        public DashboardViewModel()
        {
            modules = new List<ModuleViewModel>();

            modules.Add(new ModuleViewModel
            {
                Name = "Module1",
                Color = "red",
                BlockData = new List<BlockViewModel>()
                {
                    new BlockViewModel
                    {
                        Name = "1Line1",
                        CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 5,
                                chart1Y = 52,
                                chart2X = 37,
                                chart2Y = 19
                            }
                        }
                    },
                    new BlockViewModel
                    {
                        Name = "1Line2",
                        CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 34,
                                chart1Y = 22,
                                chart2X = 97,
                                chart2Y = 39
                            }
                        }
                    },
                    new BlockViewModel
                    {
                        Name = "1Line3",
                        CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 34,
                                chart1Y = 22,
                                chart2X = 97,
                                chart2Y = 39
                            }
                        }
                    }
                }
            });
            modules.Add(new ModuleViewModel
            {
                Name = "Module2",
                Color = "green",
                BlockData = new List<BlockViewModel>()
                {
                    new BlockViewModel
                    {
                        Name = "2Line1",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 25,
                                chart1Y = 52,
                                chart2X = 37,
                                chart2Y = 29
                            }
                        }
                    },
                    new BlockViewModel
                    {
                        Name = "2Line2",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 53,
                                chart1Y = 28,
                                chart2X = 83,
                                chart2Y = 45
                            }
                        }
                    },
                    new BlockViewModel
                    {
                        Name = "2Line3",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 31,
                                chart1Y = 23,
                                chart2X = 97,
                                chart2Y = 79
                            }
                        }
                    },
                    new BlockViewModel
                    {
                        Name = "2Line4",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 41,
                                chart1Y = 63,
                                chart2X = 37,
                                chart2Y = 69
                            }
                        }
                    }
                }
            });
            modules.Add(new ModuleViewModel
            {
                Name = "Module3",
                Color = "yellow",
                BlockData = new List<BlockViewModel>()
                {
                    new BlockViewModel()
                    {
                        Name = "3Line1",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 22,
                                chart1Y = 54,
                                chart2X = 17,
                                chart2Y = 29
                            }
                        }
                    }
                }
            });
            modules.Add(new ModuleViewModel
            {
                Name = "Module4",
                Color = "blue",
                BlockData = new List<BlockViewModel>()
                {
                    new BlockViewModel()
                    {
                        Name = "4Line1",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 23,
                                chart1Y = 42,
                                chart2X = 27,
                                chart2Y = 59
                            }
                        }
                    },
                    new BlockViewModel()
                    {
                        Name = "4Line2",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 23,
                                chart1Y = 42,
                                chart2X = 77,
                                chart2Y = 89
                            }
                        }
                    },
                    new BlockViewModel()
                    {
                        Name = "4Line3",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 25,
                                chart1Y = 32,
                                chart2X = 57,
                                chart2Y = 19
                            }
                        }
                    },
                    new BlockViewModel()
                    {
                        Name = "4Line4",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 45,
                                chart1Y = 62,
                                chart2X = 27,
                                chart2Y = 79
                            }
                        }
                    },
                    new BlockViewModel()
                    {
                        Name = "4Line5",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 65,
                                chart1Y = 82,
                                chart2X = 37,
                                chart2Y = 9
                            }
                        }
                    },
                    new BlockViewModel()
                    {
                        Name = "4Line6",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 35,
                                chart1Y = 92,
                                chart2X = 77,
                                chart2Y = 99
                            }
                        }
                    },
                    new BlockViewModel()
                    {
                        Name = "4Line7",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 20,
                                chart1Y = 82,
                                chart2X = 37,
                                chart2Y = 44
                            }
                        }
                    },
                    new BlockViewModel()
                    {
                        Name = "4Line8",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 65,
                                chart1Y = 12,
                                chart2X = 97,
                                chart2Y = 9
                            }
                        }
                    },
                    new BlockViewModel()
                    {
                        Name = "4Line9",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 65,
                                chart1Y = 82,
                                chart2X = 7,
                                chart2Y = 9
                            }
                        }
                    },
                    new BlockViewModel()
                    {
                        Name = "4Line10",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 65,
                                chart1Y = 32,
                                chart2X = 37,
                                chart2Y = 9
                            }
                        }
                    }
                }
            });
            modules.Add(new ModuleViewModel
            {
                Name = "Module5",
                Color = "blue",
                BlockData = new List<BlockViewModel>()
                {
                    new BlockViewModel()
                    {
                        Name = "5Line1",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 95,
                                chart1Y = 62,
                                chart2X = 47,
                                chart2Y = 29
                            }
                        }
                    },
                    new BlockViewModel()
                    {
                        Name = "5Line2",
                         CheckedItem = false,
                        Points = new List<PointViewModel>()
                        {
                            new PointViewModel()
                            {
                                chart1X = 34,
                                chart1Y = 22,
                                chart2X = 57,
                                chart2Y = 69
                            }
                        }
                    }
                }
            });
        }
        public List<ModuleViewModel> GetModules()
        {
            return modules;
        }
        public int GetCountOfButtons()
        {
            return modules.Count;
        }
    }
    class Program
    {
        static void Main()
        {
        }
    }
};
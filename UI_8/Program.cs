using System;
using System.Html;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Collections.ObjectModel;
using KnockoutApi;

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
        public String Name;
        public String type
        {
            get;
            set;
        }
        public String Text;
        public String Datafield;
        public double Width;
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
    public class WellSurveyItemViewModel
    {
        public double _Z = 35;
        public double _A = 7;
        public double _MD = 47;
        public double X = 55;
        public double Y = 66;
        public double Z = 33;
    }
    public class TableViewModel
    {
        public List<ColumnModel> Columns;
        public List<ColumnModel> Datafields;
        public ObservableArray<WellSurveyItemViewModel> Data;
        public ObservableArray<WellSurveyItemViewModel> Data2;
        public TableViewModel()
        {
            Datafields = new List<ColumnModel>();
            Columns = new List<ColumnModel>();
            Datafields.Add(new ColumnModel
                {
                    Name = "_Z",
                    type = "number"
                });
            Datafields.Add(new ColumnModel
                {
                    Name = "_A",
                    type = "number"
                });
            Datafields.Add(new ColumnModel
                {
                    Name = "_MD",
                    type = "number"
                });
            Columns.Add(new ColumnModel
                {
                    Text = "Zenith",
                    Datafield = "_Z",
                    Width = 80
                });
            Columns.Add(new ColumnModel
                {
                    Text = "Azimuth",
                    Datafield = "_A",
                    Width = 80
                });
            Columns.Add(new ColumnModel
                {
                    Text = "Measured Depth",
                    Datafield = "_MD",
                    Width = 120
                });
            Data = new ObservableArray<WellSurveyItemViewModel>();
            Data.Push(new WellSurveyItemViewModel
                {
                    _Z = 0,
                    _A = 0,
                    _MD = 0,
                });
            Data.Push(new WellSurveyItemViewModel
                {
                    _Z = 10,
                    _A = 10,
                    _MD = 10
                });
            Data.Push(new WellSurveyItemViewModel
                {
                    _Z = 25,
                    _A = 20,
                    _MD = 30
                });
            Data.Push(new WellSurveyItemViewModel
                {
                    _Z = 40,
                    _A = 30,
                    _MD = -40
                });
            Data.Push(new WellSurveyItemViewModel
                {
                    _Z = 80,
                    _A = 110,
                    _MD = 70
                });
        }
        public ObservableArray<WellSurveyItemViewModel> GetCartesianArray()
        {
            var cartesianarray = new ObservableArray<WellSurveyItemViewModel>();
            double md = 0.0;
            int i = 0;
            double x = 0;
            double y = 0;
            double z = 0;
            while (i < Data.Value.Length)
            {
                cartesianarray.Push(new WellSurveyItemViewModel
                {
                    X = md + Data.Value[i]._MD * Math.Sin(Data.Value[i]._Z) * Math.Cos(Data.Value[i]._A),
                    Y = md + Data.Value[i]._MD * Math.Sin(Data.Value[i]._Z) * Math.Sin(Data.Value[i]._A),
                    Z = md + Data.Value[i]._MD * Math.Cos(Data.Value[i]._Z),
                });
                md += Data.Value[i]._MD;
                i++;
            }
            i = 0;
            while (i < cartesianarray.Value.Length)
            {
                x += cartesianarray.Value[i].X;
                y += cartesianarray.Value[i].Y;
                z += cartesianarray.Value[i].Z;
                cartesianarray.Value[i].X = x;
                cartesianarray.Value[i].Y = y;
                cartesianarray.Value[i].Z = z;
                i++;
            }
            return cartesianarray;
        }
        public ObservableArray<WellSurveyItemViewModel> GetTableDat()
        {
            return Data;
        }
        public ObservableArray<WellSurveyItemViewModel> GetTableData()
        {
            return Data; 
        }
        public ObservableArray<WellSurveyItemViewModel>
            AddLine(ObservableArray<WellSurveyItemViewModel> array)
        {
            array.Push(new WellSurveyItemViewModel
                {
                    X = 0,
                    Y = 0,
                    Z = 0,
                    _Z = 0,
                    _A = 0,
                    _MD = 0
                });
            return array;
        }
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
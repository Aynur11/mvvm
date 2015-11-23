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
        public double Z = 35;
        public double A = 7;
        public double MD = 47;
    }
    public class TableViewModel
    {
        public List<ColumnModel> Columns;
        public List<ColumnModel> Datafields;
        public ObservableArray<WellSurveyItemViewModel> Data;
        public TableViewModel()
        {
            Datafields = new List<ColumnModel>();
            Columns = new List<ColumnModel>();
            Datafields.Add(new ColumnModel
                {
                    Name = "z",
                    type = "number"
                });
            Datafields.Add(new ColumnModel
                {
                    Name = "a",
                    type = "number"
                });
            Datafields.Add(new ColumnModel
                {
                    Name = "MD",
                    type = "number"
                });
            Columns.Add(new ColumnModel
                {
                    Text = "Zenith",
                    Datafield = "z",
                    Width = 80
                });
            Columns.Add(new ColumnModel
                {
                    Text = "Azimuth",
                    Datafield = "a",
                    Width = 80
                });
            Columns.Add(new ColumnModel
                {
                    Text = "Measured Depth",
                    Datafield = "MD",
                    Width = 120
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
                    Z = 25,
                    A = 20,
                    MD = 30
                });
            Data.Push(new WellSurveyItemViewModel
                {
                    Z = 40,
                    A = 30,
                    MD = -40
                });
            Data.Push(new WellSurveyItemViewModel
                {
                    Z = 80,
                    A = 110,
                    MD = 70
                });
        }
        public ObservableArray<WellSurveyItemViewModel> GetCartesianArray()
        {
            var Data2 = new ObservableArray<WellSurveyItemViewModel>();
            double md = 0.0;
            int i = 0;
            double x = 0;
            double y = 0;
            double z = 0;
            while (i < Data.Value.Length)
            {
                Data2.Push(new WellSurveyItemViewModel
                {
                    Z = md + Data.Value[i].MD * Math.Sin(Data.Value[i].Z) * Math.Cos(Data.Value[i].A),
                    A = md + Data.Value[i].MD * Math.Sin(Data.Value[i].Z) * Math.Sin(Data.Value[i].A),
                    MD = md + Data.Value[i].MD * Math.Cos(Data.Value[i].Z),
                });
                md += Data.Value[i].MD;
                i++;
            }
            i = 0;
            while (i < Data2.Value.Length)
            {
                x += Data2.Value[i].Z;
                y += Data2.Value[i].A;
                z += Data2.Value[i].MD;
                Data2.Value[i].Z = x;
                Data2.Value[i].A = y;
                Data2.Value[i].MD = z;
                i++;
            }
            return Data2;
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
                    Z = 0,
                    A = 0,
                    MD = 0
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
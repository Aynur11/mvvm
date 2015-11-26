$(document).ready(function ()
{
    var bcount = new global.UI.DashboardViewModel().getCountOfButtons();
    var modules = new global.UI.DashboardViewModel().getModules();
    var charts = new Array();
    var pressedB = 0;
    var drawId1 = "#jqxDraw1";
    var drawId2 = "#jqxDraw2";
    var halfWidth = GetHalfSize(drawId1);

    CreateButton(modules);
    ArrayInitialize();
    DrawingGraph(cartesianWellSurveyItems);
    Scaling(cartesianWellSurveyItems, halfWidth);
    $(drawId1).hide();
    $(drawId2).hide();

    function CreateButton(modules)
    {
        var buttons = new Array();
        var top = 0;
        var height = 120;
        var width = 120;
        var interval = 5;
        var marginTop = 5;
        for (var i = 0; i < bcount; i++)
        {
            if (i != 0)
            {
                top += height + interval;
            }
            buttons[i] = document.createElement(('v' == '\v') ? '<input name="mybutton">' : 'input');
            buttons[i].name = 'mbutton';
            buttons[i].type = 'button';
            buttons[i].className = 'button';
            buttons[i].id = i+1;
            buttons[i].value = modules[i].name;
            buttons[i].style.cssText = 'position: absolute;';
            buttons[i].style.width = width + "px";
            buttons[i].style.height = height + "px";
            buttons[i].style.marginTop = marginTop + "px";
            buttons[i].style.background = modules[i].color;
            buttons[i].style.top = top + "px";
            document.getElementById('jqxWidget').appendChild(buttons[i]);
        }
    }
    document.onclick = function (e)
    {
        var i = 0;
        var j = 0;
        if ((e.target.id == false))
        {
            return;
        }
        $("#listbox").jqxListBox(
            {
                width: 170,
                source: null,
                checkboxes: true,
                height: 250
            });
        var target = e.target || e.srcElement;
        if (target.name == 'mbutton')
        {
            $("#gridData1").hide();
            $(drawId1).hide();
            $(drawId2).hide();
            pressedB = e.target.id;
            bcount = 0;
            i = 0;
            j = 0;
            while (charts[j] != undefined)
            {
                $(charts[j]).hide();
                $("#listbox").jqxListBox('uncheckAll');
                j++;
            }
            while (modules[pressedB - 1].blockData[i] != undefined)
            {
                bcount++;
                i++;
            }
            ChartPreparation(bcount);
            var bnames = new Array();
            var points =
                [
                    { X: 0, Y: 0 },
                    { X: 0, Y: 0 }
                ];
            for (i = 0; i < bcount; i++)
            {
                bnames[i] = modules[pressedB - 1].blockData[i].name;
                ////
                var k = 0;
                points[0].X = modules[pressedB - 1].blockData[i].points[0].chart1X;
                points[0].Y = modules[pressedB - 1].blockData[i].points[0].chart1Y;
                points[1].X = modules[pressedB - 1].blockData[i].points[0].chart2X;
                points[1].Y = modules[pressedB - 1].blockData[i].points[0].chart2Y;
                CreateChart(charts[i], points);
            }
            $("#listbox").jqxListBox(
                {
                    width: 170,
                    source: bnames,
                    checkboxes: true,
                    height: 250
                });
            for (i = 0; i < bcount; i++)
            {
                if (modules[pressedB - 1].blockData[i].checkedItem == true)
                {
                    $("#listbox").jqxListBox('checkIndex', i);
                }
            }
        }
    }
    function ChartPreparation(chartCount)
    {
        var location = 0;
        var FIRSTCOLUMN = 0;
        var SECONDCOLUMN = 1;
        var THIRDCOLUMN = 2;
        var newline = false;
        var height = 230;
        var width = 230;
        var marginTop = 10;
        var interval = 10;
        var top = 0;
        for (var i = 0; i < chartCount; i++)
        {
            if (location == 0 && i != 0)
            {
                top += height + interval;
            }
            charts[i] = document.createElement(('v' == '\v') ? '<input name="mychart">' : 'jqxChart');
            charts[i].name = 'chart';
            charts[i].type = 'chart';
            charts[i].className = 'chart';
            charts[i].id = i + 1;
            charts[i].style.cssText = 'position: absolute;';
            charts[i].style.marginTop = marginTop + "px";
            charts[i].style.width = width + "px";
            charts[i].style.height = height + "px";
            if (newline)
            {
                charts[i].style.top = top + "px";
            }
            if (i == 0 && (pressedB - 1) == 0)
            {
                CreateObservableGride();
            }
            else
                if (location == FIRSTCOLUMN)
                {
                    document.getElementById('data1').appendChild(charts[i]);
                    location = SECONDCOLUMN;
                }
                else
                {
                    if (location == SECONDCOLUMN)
                    {
                        document.getElementById('data2').appendChild(charts[i]);
                        location = THIRDCOLUMN;
                    }
                    else
                        if (location == THIRDCOLUMN)
                        {
                            document.getElementById('data3').appendChild(charts[i]);
                            location = FIRSTCOLUMN;
                            newline = true;//i.e. need a newline
                        }
                        else
                        {
                            alert("Error");
                        }
                }
        }
    }
    function CreateChart(chart, data)
    {
        var settings =
            {
                title: "Chart name",
                description: "Description",
                showLegend: true,
                padding:
                    {
                        left: 5,
                        top: 5,
                        right: 5,
                        bottom: 5
                    },
                titlePadding:
                    {
                        left: 90,
                        top: 0,
                        right: 0,
                        bottom: 10
                    },
                source: data,
                categoryAxis:
                    {
                        dataField: "X",
                        valuesOnTicks: false,
                        showGridLines: true
                    },
                colorScheme: "scheme01",
                enableAnimations: true,
                seriesGroups:
                    [
                        {
                            type: "line",
                            columnsGapPercent: 50,
                            seriesGapPercent: 0,
                            valueAxis:
                                {
                                    unitInterval: 10,
                                    minValue: 0,
                                    maxValue: 100,
                                    displayValueAxis: true,
                                    description: "Info about X",
                                    axisSize: "auto",
                                    tickMarksColor: "#888888"
                                },
                            series:
                                [
                                    {
                                        dataField: "Y",
                                        displayText: "y"
                                    }
                                ]
                        }
                    ]
            }
        $(chart).jqxChart(settings);
        $(chart).hide();
    }
    $("#listbox").on('checkChange', function (event)
    {
        var args = event.args;
        if (args.checked)
        {
            var items = $("#listbox").jqxListBox('getCheckedItems');
            for (var i = 0; i < items.length; i++)
            {
                var item = items[i];
                for (var j = 0; j < bcount; j++)
                {
                    if (item.index == j)
                    {
                        modules[pressedB - 1].blockData[j].checkedItem = true;
                        if (pressedB - 1 == 0 && j == 0) $("#gridData1").show();
                        else
                            if (pressedB - 1 == 0 && j == 1) $(drawId1).show();
                            else
                                if (pressedB - 1 == 0 && j == 2) $(drawId2).show();
                                else
                                    $(charts[j]).show();
                    }
                }
            }
        }
        else
        {
            for (var j = 0; j < bcount; j++)
            {
                if (args.item.index == j)
                {
                    modules[pressedB - 1].blockData[j].checkedItem = false;
                    if (pressedB - 1 == 0 && j == 0) $("#gridData1").hide();
                    else
                        if (pressedB - 1 == 0 && j == 1) $(drawId1).hide();
                        else
                            if (pressedB - 1 == 0 && j == 2) $(drawId2).hide();
                            else
                                $(charts[j]).hide();
                }
            }
        }
    });
    function ArrayInitialize()
    {
        wellSurveyItems = new $.jqx.observableArray(new global.UI.TableViewModel().getTableData()());
        cartesianWellSurveyItems = new $.jqx.observableArray(new global.UI.TableViewModel().getCartesianArray()());
        //cartesianWellSurveyItems = new $.jqx.observableArray(new global.UI.TableViewModel().getTableData()());
        //cartesianWellSurveyItems = new $.jqx.observableArray(new global.UI.TableViewModel().getTableData()());
        /*
        var md = 0.0;
        var i = 0;
        while (wellSurveyItems[i] != undefined)
        {
            cartesianWellSurveyItems[i].x = md + wellSurveyItems[i]._MD * Math.sin(wellSurveyItems[i]._Z) * Math.cos(wellSurveyItems[i]._A);
            cartesianWellSurveyItems[i].y = md + wellSurveyItems[i]._MD * Math.sin(wellSurveyItems[i]._Z) * Math.sin(wellSurveyItems[i]._A);
            cartesianWellSurveyItems[i].z = md + wellSurveyItems[i]._MD * Math.cos(wellSurveyItems[i]._Z);
            md += wellSurveyItems[i]._MD;
            i++;
        }

        var x = 0;
        var y = 0;
        var z = 0;
        var m = 0;
        function reorganize()
        {
            for (var i = 0; i < cartesianWellSurveyItems.length; i++)
            {
                x += cartesianWellSurveyItems[i].x;
                y += cartesianWellSurveyItems[i].y;
                z += cartesianWellSurveyItems[i].z;
                //m -= observableArray[i].MD
                cartesianWellSurveyItems[i].x = x;
                cartesianWellSurveyItems[i].y = y;
                cartesianWellSurveyItems[i].z = z;
            }
        }
        reorganize();
        */
    }
    function Scaling(cartesianWellItems, halfsize)
    {
        var max = 0;
        var tempmax = 0;
        Scale();
        CheckTheScaleOut();
        function Scale()
        {
            for (var i = 1; i < cartesianWellItems.length; i++)
            {
                if (Math.abs(cartesianWellItems[i].x) > Math.abs(cartesianWellItems[i].y))
                {
                    tempmax = cartesianWellItems[i].x;
                }
                else
                {
                    tempmax = cartesianWellItems[i].y;
                }
                if (Math.abs(cartesianWellItems[i].z) > Math.abs(tempmax))
                {
                    tempmax = cartesianWellItems[i].z;
                }
                if (Math.abs(tempmax) > Math.abs(max))
                {
                    max = tempmax;
                }
            }
            if (Math.abs(max) > halfsize)
            {
                excessGeneralPercent = ((max * 100) / (halfsize - 0.01)) / 100;
                for (var i = 1; i < cartesianWellItems.length; i++)
                {
                    cartesianWellItems[i].x /= excessGeneralPercent;
                    cartesianWellItems[i].y /= excessGeneralPercent;
                    cartesianWellItems[i].z /= excessGeneralPercent;
                }
            }
        }
        function CheckTheScaleOut()
        {
                var i = 1;
                while (cartesianWellItems[i] != undefined)
                {
                    if (Math.abs(cartesianWellItems[i].x) > halfsize || Math.abs(cartesianWellItems[i].y) > halfsize ||
                        Math.abs(cartesianWellItems[i].z) > halfsize)
                    {
                        Scale();
                    }
                    i++;
                }
            }
    }
    function DrawAxis(drawID, width, height, color)
    {
        var renderer = $(drawID).jqxDraw('getInstance');
        var axisX = renderer.line(0, width / 2, width, width / 2, { stroke: color });
        var axisY = renderer.line(width/2, 0, height/2, height, { stroke: color });
    }
    function GetHalfSize(ID)
    {
        $(ID).jqxDraw();
        var renderer = $(ID).jqxDraw('getInstance');
        var size = renderer.getSize();
        var halfSize = size.width / 2;
        return halfSize;
    }
    function DrawingGraph(cartesianWellSurveyItems)
    {
        var radiusCoeff = 0.85;
        $(drawId1).jqxDraw();
        var renderer = $(drawId1).jqxDraw('getInstance');
        var size = renderer.getSize(); jqxGrid
        var halfSize = size.width / 2;
        Scaling(cartesianWellSurveyItems, halfSize);
        var borderElement = renderer.rect(0, 0, size.width, size.height,
            {
                stroke: '#777777',
                fill: '#c3c1c1'
            });
        var circleElement = renderer.circle(size.width / 2, size.height / 2, size.width / 2 * radiusCoeff, {});
        renderer.attr(circleElement,
            {
                fill: 'white',
                stroke: 'darkblue'
            });
        var axlecolor = 'black'
        DrawAxis(drawId1, size.width, size.height, axlecolor);
        var scaleNecessity = false;
        var color = 'green';
        $(drawId2).jqxDraw();
        var renderer2 = $(drawId2).jqxDraw('getInstance');
        var size = renderer2.getSize();
        var borderElement = renderer2.rect(0, 0, size.width, size.height,
            {
                stroke: '#777777',
                fill: '#c3c1c1'
            });
        DrawAxis(drawId2, size.width, size.height, axlecolor);
        for (var i = 0; i < cartesianWellSurveyItems.length - 1; i++)
        {
            renderer.line(Number(cartesianWellSurveyItems[i].x) + halfSize, (Number(cartesianWellSurveyItems[i].y) + halfSize),
                    Number(cartesianWellSurveyItems[i + 1].x) + halfSize, (Number(cartesianWellSurveyItems[i + 1].y) + halfSize),
                {
                    stroke: color
                });
            renderer2.line(Number(cartesianWellSurveyItems[i].x) + halfSize, (Number(cartesianWellSurveyItems[i].z) + halfSize),
                Number(cartesianWellSurveyItems[i + 1].x) + halfSize, (Number(cartesianWellSurveyItems[i + 1].z) + halfSize),
                {
                    stroke: color
                });
        }
    }
    function CreateObservableGride()
    {
        var source =
        {
            localdata: wellSurveyItems,
            datatype: "observableArray",
            datafields: new global.UI.TableViewModel().datafields
        };
        var dataAdapter = new $.jqx.dataAdapter(source);
        $("#gridData1").jqxGrid(
        {
            width: 230,
            height: 230,
            source: dataAdapter,
            sortable: true,
            columnsresize: true,
            enabletooltips: true,
            editable: true,
            selectionmode: "singlecell",
            columns: new global.UI.TableViewModel().columns
        });
        $("#gridData1").on('cellvaluechanged', function (event)
        {
            var args = event.args;
            cartesianWellSurveyItems[args.rowindex] = ConvertToCartesian(wellSurveyItems, cartesianWellSurveyItems, args.rowindex);
            DrawingGraph(cartesianWellSurveyItems);
        });
        $("#gridData1").hide();
    }
    function ConvertToCartesian(spherical, cartesian, index)
    {
        var md = spherical[index]._MD - spherical[index - 1]._MD;
        cartesian[index].x = md * Math.sin((Math.PI / 180) * spherical[index]._Z) * Math.cos((Math.PI / 180) * spherical[index]._A);
        cartesian[index].y = md * Math.sin((Math.PI / 180) * spherical[index]._Z) * Math.sin((Math.PI / 180) * spherical[index]._A);
        cartesian[index].z = md * Math.cos((Math.PI / 180) * spherical[index]._Z);
        cartesian[index].x += cartesian[index-1].x
        cartesian[index].y += cartesian[index-1].y
        cartesian[index].z += cartesian[index-1].z
        return cartesian[index];
    }
    $("#jqxToolBar").jqxToolBar({
        width: 212, height: 35, tools: 'button button button  toggleButton | button | dropdownlist combobox | input',
        initTools: function (type, index, tool, menuToolIninitialization)
        {
            if (type == "button")
            {
                var icon = $("<div class='jqx-editor-toolbar-icon jqx-editor-toolbar-icon-" +
                    theme + " buttonIcon'></div>");
            }
            switch (index)
            {
                case 0:
                    icon.addClass("jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-" + theme);
                    icon.attr("title", "Bold");
                    tool.append(icon);
                    break;
                case 1:
                    icon.addClass("jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-" + theme);
                    icon.attr("title", "Italic");
                    tool.append(icon);
                    break;
                case 2:
                    icon.addClass("jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-" + theme);
                    icon.attr("title", "Underline");
                    tool.append(icon);
                    break;
                case 3:
                    tool.jqxToggleButton({ width: 75, toggled: true });
                    tool.text("Enabled");
                    tool.on("click", function ()
                    {
                        var toggled = tool.jqxToggleButton("toggled");
                        if (toggled)
                        {
                            tool.text("Enabled");
                        }
                        else
                        {
                            tool.text("Disabled");
                        }
                    });
                    break;
                case 4:
                    tool.addClass({ width: 90, toggled: true });
                    tool.text("AddItem");
                    tool.on("click", function ()
                    {
                        wellSurveyItems = new global.UI.TableViewModel().addLine(wellSurveyItems);
                        cartesianWellSurveyItems = new global.UI.TableViewModel().addLine(cartesianWellSurveyItems);
                        //cartesianWellSurveyItems[cartesianWellSurveyItems.length] = new global.UI.TableViewModel().convertToCartesian(cartesianWellSurveyItems, cartesianWellSurveyItems, cartesianWellSurveyItems.length);
                        //cartesianWellSurveyItems[cartesianWellSurveyItems.length] = ConvertToCartesian(cartesianWellSurveyItems, cartesianWellSurveyItems, cartesianWellSurveyItems.length);
                        DrawingGraph(cartesianWellSurveyItems);
                    });
                    break;
                case 5:
                    tool.jqxDropDownList({
                        width: 130, source:
                            [
                                "<span style='font-family: Courier New;'>Courier New</span>",
                                "<span style='font-family: Times New Roman;'>Times New Roman</span>",
                                "<span style='font-family: Verdana;'>Verdana</span>"
                            ],
                        selectedIndex: 1
                    });
                    break;
                case 6:
                    tool.jqxComboBox({ width: 50, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                    break;
                case 7:
                    tool.jqxInput({ width: 200, placeHolder: "Type here to search..." });
                    break;
            }
        }
    });
    $("#jqxButton").jqxToggleButton({ width: '210', toggled: true });
    $("#jqxButton").on('click', function ()
    {
        var toggled = $("#jqxButton").jqxToggleButton('toggled');
        if (toggled)
        {
            $("#jqxButton")[0].value = 'The toolbar\'s been turned on';
            $("#jqxToolBar").show();
        }
        else
        {
            $("#jqxButton")[0].value = 'The toolbar\'s been turned off';
            $("#jqxToolBar").hide();
        }
    });
});
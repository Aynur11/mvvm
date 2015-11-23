$(document).ready(function () {
    var bcount = new global.UI.DashboardViewModel().getCountOfButtons();
    var modules = new global.UI.DashboardViewModel().getModules();
    var myChart1 = new Array();
    var pressedB = 0; //modules' index
    var ID = "#jqxDraw1";
    var halfWidth = getHalfSize(ID);
    createButton(modules);
    arrayInitialize();
    drawing(halfWidth);
    scaling(observableArray, halfWidth);
    function createButton(modules)
    {
        var myButtons = new Array();
        var size = 0;
        var interval = 125;
        for (var i = 0; i < bcount; i++)
        {
            if (i != 0)
            {
                size += interval;
            }
            myButtons[i] = document.createElement(('v' == '\v') ? '<input name="mybutton">' : 'input');
            myButtons[i].name = 'mbutton';
            myButtons[i].type = 'button';
            myButtons[i].className = 'button';
            myButtons[i].id = i+1;
            myButtons[i].value = modules[i].name;
            myButtons[i].style.cssText = 'position: absolute; margin-top: 10px; width:120px; height:120px';
            myButtons[i].style.background = modules[i].color;
            myButtons[i].style.top = size + "px";
            document.getElementById('jqxWidget').appendChild(myButtons[i]);
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
            $("#jqxDraw1").hide();
            $("#jqxDraw2").hide();
            pressedB = e.target.id;
            bcount = 0;
            i = 0;
            j = 0;
            while (myChart1[j] != undefined)
            {
                $(myChart1[j]).hide();
                $("#listbox").jqxListBox('uncheckAll');
                j++;
            }
            while (modules[pressedB - 1].blockData[i] != undefined)
            {
                bcount++;
                i++;
            }
            сhartPreparation(bcount);
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
                createChart(myChart1[i], points);
            }
            $("#listbox").jqxListBox({width: 170, source: bnames, checkboxes: true, height: 250 });
            for (i = 0; i < bcount; i++)
            {
                if (modules[pressedB - 1].blockData[i].checkedItem == true)
                {
                    $("#listbox").jqxListBox('checkIndex', i);
                }
            }
        }
    }
    function сhartPreparation(chartCount)
    {
        var fl = 0; //to set the correct child
        var newline = false;
        var moveDown = 240;
        var top = 0;//current location
        for (var i = 0; i < chartCount; i++)
        {
            if (fl == 0 && i != 0)
            {
                top += moveDown;
            }
            myChart1[i] = document.createElement(('v' == '\v') ? '<input name="mychart">' : 'jqxChart');
            myChart1[i].name = 'chart';
            myChart1[i].type = 'chart';
            myChart1[i].className = 'chart';
            myChart1[i].id = i + 1;
            myChart1[i].style.cssText = 'position: absolute; margin-top: 10px; width:230px; height:230px';
            if (newline)
            {
                myChart1[i].style.top = top + "px";
            }
            if (i == 0 && (pressedB - 1) == 0)
            {
                createObservableGride();
                fl = 1;
            }
            else
                if (fl == 0)
                {
                    document.getElementById('data1').appendChild(myChart1[i]);
                    fl = 1;
                }
                else
                {
                    if (fl == 1)
                    {
                        document.getElementById('data2').appendChild(myChart1[i]);
                        fl = 2;
                    }
                    else
                        if (fl == 2)
                        {
                            document.getElementById('data3').appendChild(myChart1[i]);
                            fl = 0;
                            newline = true;//i.e. need a newline
                        }
                        else
                        {
                            alert("Error");
                        }
                }
        }
    }
    function createChart(chart, data)
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
                            if (pressedB - 1 == 0 && j == 1) $('#jqxDraw1').show();
                            else
                                if (pressedB - 1 == 0 && j == 2) $('#jqxDraw2').show();
                                else
                                    $(myChart1[j]).show();
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
                        if (pressedB - 1 == 0 && j == 1) $("#jqxDraw1").hide();
                        else
                            if (pressedB - 1 == 0 && j == 2) $("#jqxDraw2").hide();
                            else
                                $(myChart1[j]).hide();
                }
            }
        }
    });
    function arrayInitialize()
    {
        observableArray = new $.jqx.observableArray(new global.UI.TableViewModel().getCartesianArray()(), function (changed) { });
    }
    function scaling(obsArray, halfsize)
    {
        var max = 0;
        var tempmax = 0;
        for (var i = 0; i < obsArray.length; i++)
        {
            if (Math.abs(obsArray[i].z) > Math.abs(obsArray[i].a))
            {
                tempmax = obsArray[i].z;
            }
            else
            {
                tempmax = obsArray[i].a;
            }
            if (Math.abs(obsArray[i].MD) > Math.abs(tempmax))
            {
                tempmax = obsArray[i].MD;
            }
            if (Math.abs(tempmax) > Math.abs(max))
            {
                max = tempmax;
            }
        }
        if (max - 0.1 > halfsize)
        {
            excessGeneralPercent = ((max * 100) / (halfsize - 0.01)) / 100;
            for (var i = 0; i < obsArray.length; i++)
            {
                obsArray[i].z /= excessGeneralPercent;
                obsArray[i].a /= excessGeneralPercent;
                obsArray[i].MD /= excessGeneralPercent;
            }
        }
    }
    function drawAxis(drawID, width, height, color)
    {
        var renderer = $(drawID).jqxDraw('getInstance');
        var axisX = renderer.line(0, width / 2, width, width / 2, { stroke: color });
        var axisY = renderer.line(width/2, 0, height/2, height, { stroke: color });
    }
    function getHalfSize(ID)
    {
        $(ID).jqxDraw();
        var renderer = $(ID).jqxDraw('getInstance');
        var size = renderer.getSize();
        var halfSize = size.width / 2;
        return halfSize;
    }
    function drawingGraph(array)
    {
        var ID1 = '#jqxDraw1';
        $(ID1).jqxDraw();
        var renderer = $(ID1).jqxDraw('getInstance');
        var size = renderer.getSize(); jqxGrid
        var halfSize = size.width / 2;
        var radiusCoeff = 0.85;
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
        drawAxis(ID1, size.width, size.height, axlecolor);
        var scaleNecessity = false;
        var color = 'green';
        var ID2 = '#jqxDraw2';
        $(ID2).jqxDraw();
        var renderer2 = $(ID2).jqxDraw('getInstance');
        var size = renderer2.getSize();
        var borderElement = renderer2.rect(0, 0, size.width, size.height,
            {
                stroke: '#777777',
                fill: '#c3c1c1'
            });
        drawAxis(ID2, size.width, size.height, axlecolor);
        for (var i = 0; i < array.length - 1; i++)
        {
                renderer.line(Number(array[i].z) + 115, (-1 * Number(array[i].a) + 115),
                    Number(array[i + 1].z) + 115, (-1 * Number(array[i + 1].a) + 115),
                {
                    stroke: color
                });
                renderer2.line(Number(array[i].MD) + 115, (-1 * Number(array[i].z) + 115),
                Number(array[i + 1].MD) + 115, (-1 * Number(array[i + 1].z) + 115),
                            {
                                stroke: color
                            });
        }
    }
    $('#jqxDraw1').hide();
    $('#jqxDraw2').hide();
    function drawing(halfSize)
    {
        var i = 0;
        while (observableArray[i] != undefined)
        {
            while (Math.abs(observableArray[i].z) > halfSize  || Math.abs(observableArray[i].a) > halfSize|| Math.abs(observableArray[i].MD) > halfSize)
            {
                scaling(observableArray, halfSize);
                break;
            }
            i++;
        }
        drawingGraph(observableArray);
    }
    function createObservableGride()
    {
        var source =
        {
            localdata: observableArray,
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
        $("#gridData1").hide();
    }
    $("#gridData1").on('cellvaluechanged', function (event)
    {
        var args = event.args;
        if (args.newvalue > halfWidth)
        {
            drawing(halfWidth);
        }
        else
        {
            drawingGraph(observableArray);
        }
    });
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
                        observableArray = new global.UI.TableViewModel().addLine(observableArray);
                        drawing();
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
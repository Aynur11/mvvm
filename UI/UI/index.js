$(document).ready(function () {
    var checkedItems = new Array();
    var modules = new Array();
    modules = new global.UI.DashboardViewModel().getModules();
    buttonsCount = new global.UI.DashboardViewModel().getCountOfButtons();
    var modules = new Array(buttonsCount);
    modules = new global.UI.DashboardViewModel().getModules();
    var myButtons = new Array();
    function createButton() {
        var size = 0;
        for (var i = 0; i < buttonsCount; i++)
        {
            if (i == 0) { size = 1; }
            else { size += 125; }
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
    createButton();
    var d = 0; //modules' index
    var bnames = new Array();
    var i = 0;
    var bcount = 0;
    var chartData = modules;
    var pointsCount = 0;

    var sampleData = [ //basic points' array
   { X: 0, Y: 0 },
   { X: 0, Y: 0 }
    ];

    //sort of a button click handler
    document.onclick = function (e) {
        i = 0;
        if ((e.target.id == false)) { return; }
        $("#listbox").jqxListBox({ width: 170, source: null, checkboxes: true, height: 250 });
        var target = e.target || e.srcElement;
        if (target.name == 'mbutton') {
            d = e.target.id;
            bcount = 0;
            i = 0;
            var j = 0;
            while (myChart1[j] != undefined) { // hide all charts
                $(myChart1[j]).hide();
                $("#listbox").jqxListBox('uncheckAll');
                j++;
            }
            while (modules[d - 1].blockData[i] != undefined) {
                bcount++;
                i++;
            }
            сhartPreparation(bcount);

            var bnames = new Array();
            for (i = 0; i < bcount; i++) {
                bnames[i] = modules[d - 1].blockData[i].name;
                ////
                var k = 0;
                sampleData[0].X = modules[d - 1].blockData[i].points[0].chart1X;
                sampleData[0].Y = modules[d - 1].blockData[i].points[0].chart1Y;
                sampleData[1].X = modules[d - 1].blockData[i].points[0].chart2X;
                sampleData[1].Y = modules[d - 1].blockData[i].points[0].chart2Y;
                createChart(myChart1[i], sampleData); // params: specific both chart and its data
            }
            $("#listbox").jqxListBox({ width: 170, source: bnames, checkboxes: true, height: 250 });
            for (i = 0; i < bcount; i++) {
                if (modules[d - 1].blockData[i].checkedItem == true) {
                    $("#listbox").jqxListBox('checkIndex', i);
                }
            }
        }
    }
    var i, j, k = 0;
    var ChartModel = function (items) {
        this.items = ko.observableArray(items);
    };
    var myChart1 = new Array();
    function сhartPreparation(chartCount) {
        var top = 0;
        var fl = 0; //to set the correct child
        var fl2 = false; //carrying over the chart line
        for (var i = 0; i < chartCount; i++) {
            if (i == 0) { top = 1; }
            else if (fl == 0 && i != 0) { top += 240; }
            myChart1[i] = document.createElement(('v' == '\v') ? '<input name="mychart">' : 'jqxChart');
            myChart1[i].name = 'chart';
            myChart1[i].type = 'chart';
            myChart1[i].className = 'chart';
            myChart1[i].id = i + 1;
            myChart1[i].style.cssText = 'position: absolute; margin-top: 10px; width:230px; height:230px';
            if (fl2 =  true){
                myChart1[i].style.top = top + "px";
            }
            if (fl == 0)
            { document.getElementById('data1').appendChild(myChart1[i]); fl = 1; }
            else
            {
                if (fl == 1)
                { document.getElementById('data2').appendChild(myChart1[i]); fl = 2;}
                else
                    if (fl == 2)
                    { document.getElementById('data3').appendChild(myChart1[i]); fl = 0; fl2 = true; }
                    else { alert("Error");}
            }
        }
    }

    function createChart(chart, data) { //a specific chart with its data
        var settings = {
            title: "Chart name",
            description: "Description",
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
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
                    series: [
                            { dataField: "Y", displayText: "y" }
                    ]
                }
            ]
        }
        $(chart).jqxChart(settings);
        $(chart).hide();
    }

    $("#listbox").on('checkChange', function (event) {
        var args = event.args;
        if (args.checked) {
            var items = $("#listbox").jqxListBox('getCheckedItems');
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                for (var j = 0; j < bcount; j++) {
                    if (item.index == j)
                    {
                        checkedItems[j] = true;
                        modules[d - 1].blockData[j].checkedItem = true;
                        $(myChart1[j]).show();
                    }
                }
            }
        }
        else {
            for (var j = 0; j < bcount; j++) {
                if (args.item.index == j)
                {
                    checkedItems[j] = false;
                    modules[d - 1].blockData[j].checkedItem = false;
                    $(myChart1[j]).hide();
                }
            }
        }
    });
    $("#jqxToolBar").jqxToolBar({
        width: 212, height: 35, tools: 'button button button | toggleButton | dropdownlist combobox | input',
        initTools: function (type, index, tool, menuToolIninitialization) {
            if (type == "button") {
                var icon = $("<div class='jqx-editor-toolbar-icon jqx-editor-toolbar-icon-" + theme + " buttonIcon'></div>");
            }
            switch (index) {
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
                    tool.jqxToggleButton({ width: 80, toggled: true });
                    tool.text("Enabled");
                    tool.on("click", function () {
                        var toggled = tool.jqxToggleButton("toggled");
                        if (toggled) {
                            tool.text("Enabled");
                        } else {
                            tool.text("Disabled");
                        }
                    });
                    break;
                case 4:
                    tool.jqxDropDownList({ width: 130, source: ["<span style='font-family: Courier New;'>Courier New</span>", "<span style='font-family: Times New Roman;'>Times New Roman</span>", "<span style='font-family: Verdana;'>Verdana</span>"], selectedIndex: 1 });
                    break;
                case 5:
                    tool.jqxComboBox({ width: 50, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                    break;
                case 6:
                    tool.jqxInput({ width: 200, placeHolder: "Type here to search..." });
                    break;
            }
        }
    });

    $("#jqxButton").jqxToggleButton({ width: '210', toggled: true });
    $("#jqxButton").on('click', function () {
        var toggled = $("#jqxButton").jqxToggleButton('toggled');
        if (toggled) {
            $("#jqxButton")[0].value = 'The toolbar\'s been turned on';
            $("#jqxToolBar").show();
        }
        else {
            $("#jqxButton")[0].value = 'The toolbar\'s been turned off';
            $("#jqxToolBar").hide();
        }
    });
});
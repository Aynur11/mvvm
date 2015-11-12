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
            $("#gridData1").hide();
            $("#container1").hide();
            $("#container2").hide();
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
                    /////
                    //  if (d - 1 == 0 && i == 0) { $("#listbox").jqxListBox('uncheckIndex', 0); } else
                    //////
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
        var gridFl = false;
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
            if (i == 0 && (d-1) == 0) 
            { createObservableGride(); fl = 1; }
            else
                if (fl == 0)
                { document.getElementById('data1').appendChild(myChart1[i]); fl = 1; }
                else
                {
                    if (fl == 1)
                    { document.getElementById('data2').appendChild(myChart1[i]); fl = 2; }
                    else
                        if (fl == 2)
                        { document.getElementById('data3').appendChild(myChart1[i]); fl = 0; fl2 = true; }
                        else { alert("Error"); }
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
                        ////
                        // if (d - 1 == 0 && j == 0) {; } else {
                        ////
                        if (d - 1 == 0 && j == 0) $("#gridData1").show();
                        else
                            if (d - 1 == 0 && j == 1) $('#container1').show();
                        else
                        if (d - 1 == 0 && j == 2) $('#container2').show();
                        else
                            $(myChart1[j]).show();
                        //   }
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
                    if (d - 1 == 0 && j == 0) $("#gridData1").hide();
                    else
                        if (d - 1 == 0 && j == 1) $("#container1").hide();
                    else
                    if (d - 1 == 0 && j == 2) $("#container2").hide();
                    else
                        $(myChart1[j]).hide();
                }
            }
        }
    });

    var observableArray;
    var array;
    function arrayInitialize () {
        array = new global.UI.TableViewModel().data();
        //var array = new global.UI.TableViewModel().transferData();
        //var array = new global.UI.TableViewModel().data2();
        /*
        var updateLog = function (observableArray) {
            
            var rows = "";
            for (var i = 0; i < observableArray.length; i++) {
                rows += observableArray.toJSON(["firstname", "lastname", "productname", "quantity", "price", "total"], observableArray[i]);
                rows += "<br/>";
            }
            $("#log").html(rows);
        }
        */
        
        observableArray = new $.jqx.observableArray(array, function (changed) {
            //updateLog(this);
        });
        
        //updateLog(observableArray);
    }
    arrayInitialize();

    var decartArray;
    
    function transferData() {
        var i = 0;
        //var decartArray = array;
        //var decartArray;
        decartArray = new $.jqx.observableArray(array, function (changed) {
            //renderer.refresh();
            //renderer2.refresh();
            //$('#container1').jqxDraw('refresh');
            //drawing();
            //updateLog(this);
        });
        var md = 0.0;

        while (observableArray[i] != undefined) {
            observableArray[i].z = md + array[i].MD * Math.sin(array[i].z) * Math.cos(array[i].a);
            observableArray[i].a = md + array[i].MD * Math.sin(array[i].z) * Math.sin(array[i].a);
            observableArray[i].MD = md + array[i].MD * Math.cos(array[i].z);
            md += array[i].MD;
            i++;
        }
        /*
        while (decartArray[i] != undefined)
        {
            decartArray[i]._x = md + array[i].MD * Math.sin(array[i].z) * Math.cos(array[i].a);
            decartArray[i]._y = md + array[i].MD * Math.sin(array[i].z) * Math.sin(array[i].a);
            decartArray[i]._z = md + array[i].MD * Math.cos(array[i].z);
            md += array[i].MD;
            i++;
        }
        */
    /*
        while (decartArray[i] != undefined) {
            decartArray[i]._x = array[i].z;
            decartArray[i]._y = array[i].a;
            decartArray[i]._z = array[i].MD;
            i++;
        }
        */
    }
    //transferData();

    ///////
    var x = 0;
    var y = 0;
    var z = 0;
    var m = 0;
    function transfer() {
        for (var i = 0; i < observableArray.length; i++) {
            x += observableArray[i].z;
            y -= observableArray[i].a;
            z += observableArray[i].MD;
            //m -= observableArray[i].MD
            observableArray[i].z = x;
            observableArray[i].a = y;
            observableArray[i].MD = z;
        }
    }
    transfer();


    var applied = false;
    function createObservableGride()
    {
        var GridModel = function (items) {
            this.items = ko.observableArray(items);
            };
            var model = new GridModel(observableArray);
        ////
        var source =
        {
            localdata: model.items,
            //localdata: observableArray,
            datatype: "obserableArray",
            datafields: new global.UI.TableViewModel().columns,
            updaterow: function (rowid, rowdata, commit) {
                // synchronize with the server - send update command
                // call commit with parameter true if the synchronization with the server is successful 
                // and with parameter false if the synchronization failder.
                commit(true);
            }
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
            selectionmode: "multiplecellsadvanced",
            columns: [
              {text: 'Zenith', datafield: 'z', width: 80,},
              { text: 'Azimuth', datafield: 'a', width: 80 },
              { text: 'Measured Depth', datafield: 'MD', width: 150 },
            ]
        });

        $("#gridData1").hide();

        if (!applied) {
            ko.applyBindings(model);
            applied = true;
        }
        
    }

    

    /*
    $('#updButton').jqxButton({ width: '150', height: '50' });
    $('#updButton').on('click', function () {
        alert(observableArray[0].z);
        
    });
    */

    var renderer = $('#container1').jqxDraw('getInstance');
    var renderer2 = $('#container2').jqxDraw('getInstance');

   
    //function drawing() {
    var drawing = function () {


        var coords = function (decartArray) {
            this.decartArray = ko.observableArray(decartArray);
        };

        /*
        coords = new $.jqx.observableArray(decartArray, function (changed) {
            updateLog(this);
            renderer.refresh();
        });
        */
        //var coords = transferData();
        $('#container1').jqxDraw();
        $('#container1').hide();
        renderer = $('#container1').jqxDraw('getInstance');
        renderer2 = $('#container2 ').jqxDraw('getInstance');
        var size = renderer.getSize();
        var borderElement = renderer.rect(0, 0, size.width, size.height, { stroke: '#777777', fill: '#c3c1c1' });
        renderer.text("Drawing shapes", 57, 15, undefined, undefined, 0, { 'class': 'largeText', fill: 'yellow', stroke: 'orange' }, false, 'center', 'center', 'centermiddle');
        var circleElement = renderer.circle(115, 115, 93, {});
        renderer.attr(circleElement, { fill: 'white', stroke: 'darkblue' });
        var ox = renderer.line(0, 115, 230, 115, { stroke: 'black' });
        var oy = renderer.line(115, 0, 115, 230, { stroke: 'black' });

        var line, line2;
        var color = new Array();
        color[0] = 'red';
        color[1] = 'orange';
        color[2] = 'black';
        color[3] = 'orange';
        color[4] = 'white';
        color[5] = 'orange';

        function devide() {
            for (var i = 0; i < observableArray.length; i++) {
                observableArray[i].z = observableArray[i].z / 2;
                observableArray[i].a = observableArray[i].a / 2;
                observableArray[i].MD = observableArray[i].MD / 2;
            }
        }

        var i = 0;
        var count = 0;
        var ffl = false;
        while (observableArray[i] != undefined)
        {
            while (observableArray[i].z > 100 || observableArray[i].a > 100 || observableArray[i].MD > 100) {
                devide();
            }
            i++;
        }
        for (var i = 0; i < observableArray.length - 1; i++) {
            //line = renderer.line(Number(observableArray[i].z) + 115, ( Number(observableArray[i].a) + 115),
                //Number(observableArray[i + 1].z) + 115, (Number(observableArray[i + 1].a) + 115), { stroke: color[i] });
            line = renderer.line(Number(observableArray[i].z) + 115, (-1 * Number(observableArray[i].a) + 115),
                Number(observableArray[i + 1].z) + 115, (-1 * Number(observableArray[i + 1].a) + 115), { stroke: color[i] });
        }
        //////////////
        $('#container2').jqxDraw();
        $('#container2').hide();
        var renderer2 = $('#container2').jqxDraw('getInstance');
        var size = renderer2.getSize();
        var borderElement = renderer2.rect(0, 0, size.width, size.height, { stroke: '#777777', fill: '#c3c1c1' });
        renderer2.text("Drawing shapes2", 57, 15, undefined, undefined, 0, { 'class': 'largeText', fill: 'yellow', stroke: 'orange' }, false, 'center', 'center', 'centermiddle');
        var ox2 = renderer2.line(0, 115, 230, 115, { stroke: 'black' });
        var oy2 = renderer2.line(115, 0, 115, 230, { stroke: 'black' });
        for (var i = 0; i < observableArray.length - 1; i++) {
            //line = renderer2.line(Number(observableArray[i].MD) + 115, (-1 * Number(observableArray[i].z) + 115),
                //Number(observableArray[i + 1].MD) + 115, (-1 * Number(observableArray[i + 1].z) + 115), { stroke: color[i] });
            line = renderer2.line(Number(observableArray[i].MD) + 115, (-1 * Number(observableArray[i].z) + 115),
                            Number(observableArray[i + 1].MD) + 115, (-1 * Number(observableArray[i + 1].z) + 115), { stroke: color[i] });
        }
    }
    drawing();
    var gridfl = 0;

    $("#gridData1").on('cellbeginedit', function (event) {
        var fl = false;
        var args = event.args;
        if (args.datafield == "z" && observableArray[args.rowindex].z != args.value)
        { observableArray[args.rowindex].z = args.value; fl = true; }
        if (args.datafield == "a" && observableArray[args.rowindex].a != args.value)
        { observableArray[args.rowindex].a = args.value; fl = true; }
        if (args.datafield == "MD" && observableArray[args.rowindex].MD != args.value)
        { observableArray[args.rowindex].MD = args.value; fl = true; }
        if (fl == true)
        {
            //drawing();
        }
        $('#container1').show();
        $('#container2').show();
        $("#cellbegineditevent").text("Event Type: cellbeginedit, Column: " + args.datafield + ", Row: " + (1 + args.rowindex) + ", Value: " + args.value);
        //ko.applyBindings(model);
    });
    
    $("#gridData1").on('cellendedit', function (event) {
        var fl = false;
        var args = event.args;
        if (args.datafield == "z" && observableArray[args.rowindex].z != args.value)
        { observableArray[args.rowindex].z = args.value; fl = true; }
        if (args.datafield == "a" && observableArray[args.rowindex].a != args.value)
        { observableArray[args.rowindex].a = args.value; fl = true; }
        if (args.datafield == "MD" && observableArray[args.rowindex].MD != args.value)
        { observableArray[args.rowindex].MD = args.value; fl = true; }
        
        if (fl == true)
        {
            /*
            var i = 0;
            var arrayfl = false;
            for (i = 0; i < observableArray.length; i++) {
                if (observableArray[i].z > 100 || observableArray[i].a > 100 || observableArray[i].MD > 100) {
                    arrayfl = true;
                }
                //if (arrayfl == true) break;
                // i++;с
            }
            i = 0;
            if (fl == true) {
                //for (i = 0; i < observableArray.length; i++) {
                while (observableArray[i] != undefined){
                    while (observableArray[i].z > 100 || observableArray[i].a > 100 || observableArray[i].MD > 100)
                    {
                        observableArray[i].z = observableArray[i].z / 2;
                        observableArray[i].a = observableArray[i].a / 2;
                        observableArray[i].MD = observableArray[i].MD / 2;
                    }
                    i++;
                }
            }
            */
            drawing();
        }
        $('#container1').show();
        $('#container2').show();
        $("#cellendeditevent").text("Event Type: cellendedit, Column: " + args.datafield + ", Row: " + (1 + args.rowindex) + ", Value: " + args.value);
    });
    /*
    if (gridfl == 1) {
        drawing(); $('#container1').show();
        $('#container2').show(); gridfl = 0;
    }
    */

    $("#jqxToolBar").jqxToolBar({
        width: 212, height: 35, tools: 'button button button  toggleButton | button  button | dropdownlist combobox | input',
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
                    tool.jqxToggleButton({ width: 75, toggled: true });
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
                    tool.addClass({ width: 90, toggled: true });
                    tool.text("AddItem");
                    tool.on("click", function () {
                        var line = {
                            z: Math.random() * 55,
                            a: Math.random() * 55,
                            MD: Math.random() * 55
                        }
                        alert(observableArray[1]._x);
                        observableArray.push(line);
                    });
                    break;
                case 5:
                    tool.addClass({ width: 90, toggled: true });
                    tool.text("RemoveItem");
                    tool.on("click", function () {
                        observableArray.remove(0);
                    });
                    break;
                case 6:
                    tool.jqxDropDownList({ width: 130, source: ["<span style='font-family: Courier New;'>Courier New</span>", "<span style='font-family: Times New Roman;'>Times New Roman</span>", "<span style='font-family: Verdana;'>Verdana</span>"], selectedIndex: 1 });
                    break;
                case 7:
                    tool.jqxComboBox({ width: 50, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                    break;
                case 8:
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